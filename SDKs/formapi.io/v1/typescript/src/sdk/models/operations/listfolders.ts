import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListFoldersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent_folder_id" })
  parentFolderId?: string;
}


export class ListFoldersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class ListFoldersFolder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_folder_id" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}


export class ListFoldersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListFoldersQueryParams;

  @SpeakeasyMetadata()
  security: ListFoldersSecurity;
}


export class ListFoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata({ elemType: ListFoldersFolder })
  folders?: ListFoldersFolder[];
}
