import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyNotificationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyNotificationIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyNotificationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyNotificationIdPathParams;

  @SpeakeasyMetadata()
  security: CompanyNotificationIdSecurity;
}


export class CompanyNotificationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyNotificationId200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companyNotificationIdDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
