import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyDeepsearchIsinRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=isin;" })
  isin?: string;
}


export class CompanyDeepsearchIsinSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyDeepsearchIsinRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CompanyDeepsearchIsinRequestBody;

  @Metadata()
  security: CompanyDeepsearchIsinSecurity;
}


export class CompanyDeepsearchIsinResponse extends SpeakeasyBase {
  @Metadata()
  companyDeepsearchIsin200ApplicationJsonAnies?: any[];

  @Metadata()
  companyDeepsearchIsinDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
