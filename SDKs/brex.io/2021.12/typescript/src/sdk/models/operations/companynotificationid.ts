import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyNotificationIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyNotificationIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyNotificationIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyNotificationIdPathParams;

  @Metadata()
  security: CompanyNotificationIdSecurity;
}


export class CompanyNotificationIdResponse extends SpeakeasyBase {
  @Metadata()
  companyNotificationId200ApplicationJsonAnies?: any[];

  @Metadata()
  companyNotificationIdDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
