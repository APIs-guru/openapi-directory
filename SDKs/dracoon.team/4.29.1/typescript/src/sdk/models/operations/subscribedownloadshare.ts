import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubscribeDownloadSharePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class SubscribeDownloadShareHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SubscribeDownloadShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubscribeDownloadSharePathParams;

  @SpeakeasyMetadata()
  headers: SubscribeDownloadShareHeaders;
}


export class SubscribeDownloadShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscribedDownloadShare?: shared.SubscribedDownloadShare;
}
