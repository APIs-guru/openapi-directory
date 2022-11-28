import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IbanComprehensiveRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ibanNumber;" })
  ibanNumber: string;
}


export class IbanComprehensiveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class IbanComprehensiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: IbanComprehensiveRequestBody;

  @SpeakeasyMetadata()
  security: IbanComprehensiveSecurity;
}


export class IbanComprehensiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ibanComprehensiveDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneapi1v11ibanVerification1checkIbanPostResponses200ContentApplication1jsonSchema?: any;
}
