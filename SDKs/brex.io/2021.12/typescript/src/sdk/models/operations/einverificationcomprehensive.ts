import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EinVerificationComprehensiveQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ein" })
  ein: string;
}


export class EinVerificationComprehensiveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class EinVerificationComprehensiveRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EinVerificationComprehensiveQueryParams;

  @Metadata()
  security: EinVerificationComprehensiveSecurity;
}


export class EinVerificationComprehensiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  einVerificationComprehensive200ApplicationJsonAny?: any;

  @Metadata()
  einVerificationComprehensiveDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
