import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurityOption3;
}


export class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams;

  @Metadata()
  security: PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity;
}


export class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deployKey?: Map<string, any>;

  @Metadata()
  error?: Map<string, any>;
}
