import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFolderCreateFolderDataFolder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent_folder_id" })
  parentFolderId?: string;
}


export class CreateFolderCreateFolderData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=folder" })
  folder: CreateFolderCreateFolderDataFolder;
}


export class CreateFolderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class CreateFolderFolder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_folder_id" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}


export class CreateFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateFolderCreateFolderData;

  @SpeakeasyMetadata()
  security: CreateFolderSecurity;
}


export class CreateFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  folder?: CreateFolderFolder;
}
