import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMessagesSendQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deduplication-id" })
  deduplicationId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;
}


export class GetMessagesSendSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetMessagesSendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMessagesSendQueryParams;

  @SpeakeasyMetadata()
  security: GetMessagesSendSecurity;
}


export class GetMessagesSendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata()
  statusCode: number;
}
