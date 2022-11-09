import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNodeSubscriptionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateNodeSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateNodeSubscriptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateSubscriptionsBulkRequest;
}


export class UpdateNodeSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
