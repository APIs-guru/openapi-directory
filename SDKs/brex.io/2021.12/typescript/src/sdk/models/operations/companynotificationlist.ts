import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyNotificationListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyNotificationListRequest extends SpeakeasyBase {
  @Metadata()
  security: CompanyNotificationListSecurity;
}


export class CompanyNotificationListResponse extends SpeakeasyBase {
  @Metadata()
  companyNotificationList200ApplicationJsonAnies?: any[];

  @Metadata()
  companyNotificationListDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
