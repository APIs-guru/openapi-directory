import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyMonitorIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyMonitorIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyMonitorIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyMonitorIdPathParams;

  @Metadata()
  security: CompanyMonitorIdSecurity;
}


export class CompanyMonitorIdResponse extends SpeakeasyBase {
  @Metadata()
  companyMonitorId200ApplicationJsonAnies?: any[];

  @Metadata()
  companyMonitorIdDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
