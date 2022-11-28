import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Attachments } from "./attachments";
import { BatchApi } from "./batchapi";
import { CustomFieldSettings } from "./customfieldsettings";
import { CustomFields } from "./customfields";
import { Events } from "./events";
import { Goals } from "./goals";
import { Jobs } from "./jobs";
import { OrganizationExports } from "./organizationexports";
import { PortfolioMemberships } from "./portfoliomemberships";
import { Portfolios } from "./portfolios";
import { ProjectMemberships } from "./projectmemberships";
import { ProjectStatuses } from "./projectstatuses";
import { Projects } from "./projects";
import { Sections } from "./sections";
import { Stories } from "./stories";
import { Tags } from "./tags";
import { Tasks } from "./tasks";
import { TeamMemberships } from "./teammemberships";
import { Teams } from "./teams";
import { TimePeriods } from "./timeperiods";
import { Typeahead } from "./typeahead";
import { UserTaskLists } from "./usertasklists";
import { Users } from "./users";
import { Webhooks } from "./webhooks";
import { WorkspaceMemberships } from "./workspacememberships";
import { Workspaces } from "./workspaces";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://app.asana.com/api/1.0",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {
  public attachments: Attachments;
  public batchApi: BatchApi;
  public customFieldSettings: CustomFieldSettings;
  public customFields: CustomFields;
  public events: Events;
  public goals: Goals;
  public jobs: Jobs;
  public organizationExports: OrganizationExports;
  public portfolioMemberships: PortfolioMemberships;
  public portfolios: Portfolios;
  public projectMemberships: ProjectMemberships;
  public projectStatuses: ProjectStatuses;
  public projects: Projects;
  public sections: Sections;
  public stories: Stories;
  public tags: Tags;
  public tasks: Tasks;
  public teamMemberships: TeamMemberships;
  public teams: Teams;
  public timePeriods: TimePeriods;
  public typeahead: Typeahead;
  public userTaskLists: UserTaskLists;
  public users: Users;
  public webhooks: Webhooks;
  public workspaceMemberships: WorkspaceMemberships;
  public workspaces: Workspaces;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
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
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
    this.attachments = new Attachments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.batchApi = new BatchApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customFieldSettings = new CustomFieldSettings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customFields = new CustomFields(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.events = new Events(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.goals = new Goals(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.jobs = new Jobs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.organizationExports = new OrganizationExports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.portfolioMemberships = new PortfolioMemberships(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.portfolios = new Portfolios(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projectMemberships = new ProjectMemberships(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projectStatuses = new ProjectStatuses(
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
    
    this.sections = new Sections(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.stories = new Stories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tags = new Tags(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tasks = new Tasks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.teamMemberships = new TeamMemberships(
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
    
    this.timePeriods = new TimePeriods(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.typeahead = new Typeahead(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.userTaskLists = new UserTaskLists(
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
    
    this.webhooks = new Webhooks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.workspaceMemberships = new WorkspaceMemberships(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.workspaces = new Workspaces(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
