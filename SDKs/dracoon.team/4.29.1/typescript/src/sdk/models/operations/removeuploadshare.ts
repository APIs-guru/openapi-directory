import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveUploadSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class RemoveUploadShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveUploadShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveUploadSharePathParams;

  @Metadata()
  headers: RemoveUploadShareHeaders;
}


export class RemoveUploadShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
