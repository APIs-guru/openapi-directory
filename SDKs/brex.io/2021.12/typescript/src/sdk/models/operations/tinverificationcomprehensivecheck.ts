import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TinVerificationComprehensiveCheckQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=threshold" })
  threshold?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tin" })
  tin: string;
}


export class TinVerificationComprehensiveCheckSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class TinVerificationComprehensiveCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TinVerificationComprehensiveCheckQueryParams;

  @SpeakeasyMetadata()
  security: TinVerificationComprehensiveCheckSecurity;
}


export class TinVerificationComprehensiveCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tinVerificationComprehensiveCheck200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  tinVerificationComprehensiveCheckDefaultApplicationJsonAny?: any;
}
