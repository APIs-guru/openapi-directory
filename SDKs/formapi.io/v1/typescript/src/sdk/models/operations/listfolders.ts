import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListFoldersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=parent_folder_id" })
  parentFolderId?: string;
}


export class ListFoldersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class ListFoldersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListFoldersQueryParams;

  @Metadata()
  security: ListFoldersSecurity;
}


export class ListFoldersFolder extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_folder_id" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;
}


export class ListFoldersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata({ elemType: operations.ListFoldersFolder })
  folders?: ListFoldersFolder[];
}
