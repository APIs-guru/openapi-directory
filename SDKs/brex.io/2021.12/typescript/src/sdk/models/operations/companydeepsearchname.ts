import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyDeepsearchNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CompanyDeepsearchNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyDeepsearchNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyDeepsearchNamePathParams;

  @Metadata()
  security: CompanyDeepsearchNameSecurity;
}


export class CompanyDeepsearchNameResponse extends SpeakeasyBase {
  @Metadata()
  companyDeepsearchName200ApplicationJsonAnies?: any[];

  @Metadata()
  companyDeepsearchNameDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
