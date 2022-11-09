import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRepositoriesWorkspaceRepoSlugIssuesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostRepositoriesWorkspaceRepoSlugIssuesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostRepositoriesWorkspaceRepoSlugIssuesSecurityOption3;
}


export class PostRepositoriesWorkspaceRepoSlugIssuesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRepositoriesWorkspaceRepoSlugIssuesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: PostRepositoriesWorkspaceRepoSlugIssuesSecurity;
}


export class PostRepositoriesWorkspaceRepoSlugIssuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  issue?: Map<string, any>;
}
