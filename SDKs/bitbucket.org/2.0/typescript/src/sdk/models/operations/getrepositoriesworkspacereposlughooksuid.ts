import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoriesWorkspaceRepoSlugHooksUidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoriesWorkspaceRepoSlugHooksUidSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetRepositoriesWorkspaceRepoSlugHooksUidSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetRepositoriesWorkspaceRepoSlugHooksUidSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugHooksUidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetRepositoriesWorkspaceRepoSlugHooksUidSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetRepositoriesWorkspaceRepoSlugHooksUidSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetRepositoriesWorkspaceRepoSlugHooksUidSecurityOption3;
}


export class GetRepositoriesWorkspaceRepoSlugHooksUidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugHooksUidPathParams;

  @Metadata()
  security: GetRepositoriesWorkspaceRepoSlugHooksUidSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugHooksUidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  webhookSubscription?: Map<string, any>;
}
