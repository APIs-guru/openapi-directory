import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams;

  @SpeakeasyMetadata()
  security: PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity;
}


export class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deployKey?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
