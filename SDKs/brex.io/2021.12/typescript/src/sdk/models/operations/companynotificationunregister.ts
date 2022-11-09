import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyNotificationUnregisterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyNotificationUnregisterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyNotificationUnregisterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyNotificationUnregisterPathParams;

  @Metadata()
  security: CompanyNotificationUnregisterSecurity;
}


export class CompanyNotificationUnregisterResponse extends SpeakeasyBase {
  @Metadata()
  companyNotificationUnregisterDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
