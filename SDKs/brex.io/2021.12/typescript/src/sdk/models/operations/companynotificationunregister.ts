import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyNotificationUnregisterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyNotificationUnregisterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyNotificationUnregisterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyNotificationUnregisterPathParams;

  @SpeakeasyMetadata()
  security: CompanyNotificationUnregisterSecurity;
}


export class CompanyNotificationUnregisterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyNotificationUnregisterDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
