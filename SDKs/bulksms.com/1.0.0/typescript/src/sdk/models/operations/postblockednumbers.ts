import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostBlockedNumbersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostBlockedNumbersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: string[];

  @Metadata()
  security: PostBlockedNumbersSecurity;
}


export class PostBlockedNumbersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
