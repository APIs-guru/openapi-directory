import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption3;
}


export class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams;

  @Metadata()
  security: DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity;
}


export class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
