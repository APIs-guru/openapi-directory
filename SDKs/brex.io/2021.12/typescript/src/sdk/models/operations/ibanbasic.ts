import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IbanBasicRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=ibanNumber;" })
  ibanNumber: string;
}


export class IbanBasicSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class IbanBasicRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: IbanBasicRequestBody;

  @Metadata()
  security: IbanBasicSecurity;
}


export class IbanBasicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ibanBasic200ApplicationJsonAny?: any;

  @Metadata()
  ibanBasicDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
