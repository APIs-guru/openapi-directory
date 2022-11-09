import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyMonitorUnregisterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyMonitorUnregisterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyMonitorUnregisterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyMonitorUnregisterPathParams;

  @Metadata()
  security: CompanyMonitorUnregisterSecurity;
}


export class CompanyMonitorUnregisterResponse extends SpeakeasyBase {
  @Metadata()
  companyMonitorUnregisterDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
