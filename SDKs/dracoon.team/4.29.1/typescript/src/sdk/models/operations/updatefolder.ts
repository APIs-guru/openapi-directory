import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFolderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=folder_id" })
  folderId: number;
}


export class UpdateFolderHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class UpdateFolderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateFolderPathParams;

  @Metadata()
  headers: UpdateFolderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateFolderRequest;
}


export class UpdateFolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  node?: shared.Node;

  @Metadata()
  statusCode: number;
}
