import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyMonitorUnregisterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyMonitorUnregisterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyMonitorUnregisterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyMonitorUnregisterPathParams;

  @SpeakeasyMetadata()
  security: CompanyMonitorUnregisterSecurity;
}


export class CompanyMonitorUnregisterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyMonitorUnregisterDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
