import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubscribeDownloadSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class SubscribeDownloadShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SubscribeDownloadShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SubscribeDownloadSharePathParams;

  @Metadata()
  headers: SubscribeDownloadShareHeaders;
}


export class SubscribeDownloadShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscribedDownloadShare?: shared.SubscribedDownloadShare;
}
