import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyMonitorIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyMonitorIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyMonitorIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyMonitorIdPathParams;

  @SpeakeasyMetadata()
  security: CompanyMonitorIdSecurity;
}


export class CompanyMonitorIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyMonitorId200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companyMonitorIdDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
