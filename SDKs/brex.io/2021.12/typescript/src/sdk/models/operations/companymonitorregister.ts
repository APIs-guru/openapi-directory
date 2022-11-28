import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyMonitorRegisterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyMonitorRegisterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=callbackUrl;" })
  callbackUrl: string;

  @SpeakeasyMetadata({ data: "form, name=changeType;" })
  changeType: string;
}


export class CompanyMonitorRegisterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyMonitorRegisterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyMonitorRegisterPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CompanyMonitorRegisterRequestBody;

  @SpeakeasyMetadata()
  security: CompanyMonitorRegisterSecurity;
}


export class CompanyMonitorRegisterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyMonitorRegister200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  companyMonitorRegisterDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
