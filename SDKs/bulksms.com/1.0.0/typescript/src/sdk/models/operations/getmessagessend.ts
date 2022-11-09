import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMessagesSendQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=body" })
  body: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deduplication-id" })
  deduplicationId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;
}


export class GetMessagesSendSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetMessagesSendRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMessagesSendQueryParams;

  @Metadata()
  security: GetMessagesSendSecurity;
}


export class GetMessagesSendResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.Message })
  messages?: shared.Message[];

  @Metadata()
  statusCode: number;
}
