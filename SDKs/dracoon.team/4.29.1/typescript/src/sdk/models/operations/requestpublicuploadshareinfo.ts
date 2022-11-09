import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestPublicUploadShareInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;
}


export class RequestPublicUploadShareInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Share-Password" })
  xSdsSharePassword?: string;
}


export class RequestPublicUploadShareInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestPublicUploadShareInfoPathParams;

  @Metadata()
  headers: RequestPublicUploadShareInfoHeaders;
}


export class RequestPublicUploadShareInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  publicUploadShare?: shared.PublicUploadShare;

  @Metadata()
  statusCode: number;
}
