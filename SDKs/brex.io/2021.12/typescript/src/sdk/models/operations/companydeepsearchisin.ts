import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyDeepsearchIsinRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=isin;" })
  isin?: string;
}


export class CompanyDeepsearchIsinSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyDeepsearchIsinRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CompanyDeepsearchIsinRequestBody;

  @SpeakeasyMetadata()
  security: CompanyDeepsearchIsinSecurity;
}


export class CompanyDeepsearchIsinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyDeepsearchIsin200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companyDeepsearchIsinDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
