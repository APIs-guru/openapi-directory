import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Actions } from "./actions";
import { Activity } from "./activity";
import { Apps } from "./apps";
import { Checks } from "./checks";
import { CodeScanning } from "./codescanning";
import { CodesOfConduct } from "./codesofconduct";
import { Emojis } from "./emojis";
import { EnterpriseAdmin } from "./enterpriseadmin";
import { Gists } from "./gists";
import { Git } from "./git";
import { Gitignore } from "./gitignore";
import { Issues } from "./issues";
import { Licenses } from "./licenses";
import { Markdown } from "./markdown";
import { Meta } from "./meta";
import { OauthAuthorizations } from "./oauthauthorizations";
import { Orgs } from "./orgs";
import { Projects } from "./projects";
import { Pulls } from "./pulls";
import { RateLimit } from "./ratelimit";
import { Reactions } from "./reactions";
import { Repos } from "./repos";
import { Search } from "./search";
import { SecretScanning } from "./secretscanning";
import { Teams } from "./teams";
import { Users } from "./users";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://github.com/",
	"https://{protocol}://{hostname}",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

/* SDK Documentation: https://docs.github.com/enterprise-server@3.1/rest/ - GitHub Enterprise Developer Docs*/
export class SDK {
  public actions: Actions;
  public activity: Activity;
  public apps: Apps;
  public checks: Checks;
  public codeScanning: CodeScanning;
  public codesOfConduct: CodesOfConduct;
  public emojis: Emojis;
  public enterpriseAdmin: EnterpriseAdmin;
  public gists: Gists;
  public git: Git;
  public gitignore: Gitignore;
  public issues: Issues;
  public licenses: Licenses;
  public markdown: Markdown;
  public meta: Meta;
  public oauthAuthorizations: OauthAuthorizations;
  public orgs: Orgs;
  public projects: Projects;
  public pulls: Pulls;
  public rateLimit: RateLimit;
  public reactions: Reactions;
  public repos: Repos;
  public search: Search;
  public secretScanning: SecretScanning;
  public teams: Teams;
  public users: Users;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
    this.actions = new Actions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.activity = new Activity(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.apps = new Apps(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.checks = new Checks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.codeScanning = new CodeScanning(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.codesOfConduct = new CodesOfConduct(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.emojis = new Emojis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.enterpriseAdmin = new EnterpriseAdmin(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.gists = new Gists(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.git = new Git(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.gitignore = new Gitignore(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.issues = new Issues(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.licenses = new Licenses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.markdown = new Markdown(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.meta = new Meta(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.oauthAuthorizations = new OauthAuthorizations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.orgs = new Orgs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projects = new Projects(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pulls = new Pulls(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rateLimit = new RateLimit(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.reactions = new Reactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.repos = new Repos(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.search = new Search(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.secretScanning = new SecretScanning(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.teams = new Teams(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
