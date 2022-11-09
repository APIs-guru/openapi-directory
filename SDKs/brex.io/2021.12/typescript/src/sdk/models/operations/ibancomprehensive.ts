import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IbanComprehensiveRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=ibanNumber;" })
  ibanNumber: string;
}


export class IbanComprehensiveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class IbanComprehensiveRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: IbanComprehensiveRequestBody;

  @Metadata()
  security: IbanComprehensiveSecurity;
}


export class IbanComprehensiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ibanComprehensiveDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneapi1v11ibanVerification1checkIbanPostResponses200ContentApplication1jsonSchema?: any;
}
