import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyMonitorListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyMonitorListRequest extends SpeakeasyBase {
  @Metadata()
  security: CompanyMonitorListSecurity;
}


export class CompanyMonitorListResponse extends SpeakeasyBase {
  @Metadata()
  companyMonitorList200ApplicationJsonAnies?: any[];

  @Metadata()
  companyMonitorListDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
