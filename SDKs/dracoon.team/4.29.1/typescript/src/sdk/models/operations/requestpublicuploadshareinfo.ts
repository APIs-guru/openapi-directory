import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestPublicUploadShareInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;
}


export class RequestPublicUploadShareInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Share-Password" })
  xSdsSharePassword?: string;
}


export class RequestPublicUploadShareInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestPublicUploadShareInfoPathParams;

  @SpeakeasyMetadata()
  headers: RequestPublicUploadShareInfoHeaders;
}


export class RequestPublicUploadShareInfoResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  publicUploadShare?: shared.PublicUploadShareOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
