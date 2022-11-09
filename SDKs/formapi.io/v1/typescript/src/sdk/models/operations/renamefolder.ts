import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RenameFolderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=folder_id" })
  folderId: string;
}


export class RenameFolderRenameFolderData extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class RenameFolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class RenameFolderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RenameFolderPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RenameFolderRenameFolderData;

  @Metadata()
  security: RenameFolderSecurity;
}


export class RenameFolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;
}
