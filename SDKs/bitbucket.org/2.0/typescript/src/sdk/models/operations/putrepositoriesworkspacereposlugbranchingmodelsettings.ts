import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams;

  @SpeakeasyMetadata()
  security: PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity;
}


export class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  branchingModelSettings?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
