import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyMonitorListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyMonitorListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: CompanyMonitorListSecurity;
}


export class CompanyMonitorListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyMonitorList200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companyMonitorListDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
