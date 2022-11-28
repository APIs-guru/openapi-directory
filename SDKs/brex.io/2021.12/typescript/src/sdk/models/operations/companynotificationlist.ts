import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyNotificationListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyNotificationListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: CompanyNotificationListSecurity;
}


export class CompanyNotificationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyNotificationList200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companyNotificationListDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
