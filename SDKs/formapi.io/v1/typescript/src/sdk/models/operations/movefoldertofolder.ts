import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MoveFolderToFolderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=folder_id" })
  folderId: string;
}


export class MoveFolderToFolderMoveFolderData extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent_folder_id" })
  parentFolderId?: string;
}


export class MoveFolderToFolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class MoveFolderToFolderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MoveFolderToFolderPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: MoveFolderToFolderMoveFolderData;

  @Metadata()
  security: MoveFolderToFolderSecurity;
}


export class MoveFolderToFolderFolder extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_folder_id" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;
}


export class MoveFolderToFolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  folder?: MoveFolderToFolderFolder;
}
