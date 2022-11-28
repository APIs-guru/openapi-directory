import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyDeepsearchNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CompanyDeepsearchNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyDeepsearchNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyDeepsearchNamePathParams;

  @SpeakeasyMetadata()
  security: CompanyDeepsearchNameSecurity;
}


export class CompanyDeepsearchNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyDeepsearchName200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companyDeepsearchNameDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
