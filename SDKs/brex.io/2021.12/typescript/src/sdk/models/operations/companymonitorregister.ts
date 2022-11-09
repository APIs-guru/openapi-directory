import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyMonitorRegisterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyMonitorRegisterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=callbackUrl;" })
  callbackUrl: string;

  @Metadata({ data: "form, name=changeType;" })
  changeType: string;
}


export class CompanyMonitorRegisterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyMonitorRegisterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyMonitorRegisterPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CompanyMonitorRegisterRequestBody;

  @Metadata()
  security: CompanyMonitorRegisterSecurity;
}


export class CompanyMonitorRegisterResponse extends SpeakeasyBase {
  @Metadata()
  companyMonitorRegister200ApplicationJsonAny?: any;

  @Metadata()
  companyMonitorRegisterDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
