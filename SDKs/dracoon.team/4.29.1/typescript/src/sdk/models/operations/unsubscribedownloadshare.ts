import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnsubscribeDownloadSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class UnsubscribeDownloadShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UnsubscribeDownloadShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnsubscribeDownloadSharePathParams;

  @Metadata()
  headers: UnsubscribeDownloadShareHeaders;
}


export class UnsubscribeDownloadShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
