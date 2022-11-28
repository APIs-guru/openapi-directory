import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyNotificationRegisterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyNotificationRegisterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=callbackUrl;" })
  callbackUrl: string;
}


export class CompanyNotificationRegisterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyNotificationRegisterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyNotificationRegisterPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CompanyNotificationRegisterRequestBody;

  @SpeakeasyMetadata()
  security: CompanyNotificationRegisterSecurity;
}


export class CompanyNotificationRegisterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyNotificationRegister200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  companyNotificationRegisterDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
