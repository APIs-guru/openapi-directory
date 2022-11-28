import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RenameFolderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folder_id" })
  folderId: string;
}


export class RenameFolderRenameFolderData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class RenameFolderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class RenameFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RenameFolderPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RenameFolderRenameFolderData;

  @SpeakeasyMetadata()
  security: RenameFolderSecurity;
}


export class RenameFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;
}
