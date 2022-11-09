import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyNotificationRegisterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyNotificationRegisterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=callbackUrl;" })
  callbackUrl: string;
}


export class CompanyNotificationRegisterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyNotificationRegisterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyNotificationRegisterPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CompanyNotificationRegisterRequestBody;

  @Metadata()
  security: CompanyNotificationRegisterSecurity;
}


export class CompanyNotificationRegisterResponse extends SpeakeasyBase {
  @Metadata()
  companyNotificationRegister200ApplicationJsonAny?: any;

  @Metadata()
  companyNotificationRegisterDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
