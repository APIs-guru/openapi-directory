import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubscribeUploadSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class SubscribeUploadShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SubscribeUploadShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SubscribeUploadSharePathParams;

  @Metadata()
  headers: SubscribeUploadShareHeaders;
}


export class SubscribeUploadShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscribedUploadShare?: shared.SubscribedUploadShare;
}
