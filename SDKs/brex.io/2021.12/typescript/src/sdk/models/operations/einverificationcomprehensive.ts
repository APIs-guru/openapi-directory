import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EinVerificationComprehensiveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ein" })
  ein: string;
}


export class EinVerificationComprehensiveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class EinVerificationComprehensiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EinVerificationComprehensiveQueryParams;

  @SpeakeasyMetadata()
  security: EinVerificationComprehensiveSecurity;
}


export class EinVerificationComprehensiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  einVerificationComprehensive200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  einVerificationComprehensiveDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
