import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyDeepsearchNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class CompanyDeepsearchNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyDeepsearchNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyDeepsearchNumberPathParams;

  @SpeakeasyMetadata()
  security: CompanyDeepsearchNumberSecurity;
}


export class CompanyDeepsearchNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyDeepsearchNumber200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companyDeepsearchNumberDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
