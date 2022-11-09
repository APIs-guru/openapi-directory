import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRepositoriesWorkspaceRepoSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutRepositoriesWorkspaceRepoSlugSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutRepositoriesWorkspaceRepoSlugSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutRepositoriesWorkspaceRepoSlugSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutRepositoriesWorkspaceRepoSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutRepositoriesWorkspaceRepoSlugSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutRepositoriesWorkspaceRepoSlugSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutRepositoriesWorkspaceRepoSlugSecurityOption3;
}


export class PutRepositoriesWorkspaceRepoSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRepositoriesWorkspaceRepoSlugPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;

  @Metadata()
  security: PutRepositoriesWorkspaceRepoSlugSecurity;
}


export class PutRepositoriesWorkspaceRepoSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  repository?: Map<string, any>;
}
