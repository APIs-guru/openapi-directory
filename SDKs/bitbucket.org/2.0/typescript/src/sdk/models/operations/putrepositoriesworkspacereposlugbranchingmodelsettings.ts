import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption3;
}


export class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams;

  @Metadata()
  security: PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity;
}


export class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  branchingModelSettings?: Map<string, any>;

  @Metadata()
  error?: Map<string, any>;
}
