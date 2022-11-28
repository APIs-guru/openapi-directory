import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IbanBasicRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ibanNumber;" })
  ibanNumber: string;
}


export class IbanBasicSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class IbanBasicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: IbanBasicRequestBody;

  @SpeakeasyMetadata()
  security: IbanBasicSecurity;
}


export class IbanBasicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ibanBasic200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  ibanBasicDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
