import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestPublicDownloadShareInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;
}


export class RequestPublicDownloadShareInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestPublicDownloadShareInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestPublicDownloadShareInfoPathParams;

  @SpeakeasyMetadata()
  headers: RequestPublicDownloadShareInfoHeaders;
}


export class RequestPublicDownloadShareInfoResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  publicDownloadShare?: shared.PublicDownloadShareOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
