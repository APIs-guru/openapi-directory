import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyDeepsearchNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class CompanyDeepsearchNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyDeepsearchNumberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyDeepsearchNumberPathParams;

  @Metadata()
  security: CompanyDeepsearchNumberSecurity;
}


export class CompanyDeepsearchNumberResponse extends SpeakeasyBase {
  @Metadata()
  companyDeepsearchNumber200ApplicationJsonAnies?: any[];

  @Metadata()
  companyDeepsearchNumberDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
