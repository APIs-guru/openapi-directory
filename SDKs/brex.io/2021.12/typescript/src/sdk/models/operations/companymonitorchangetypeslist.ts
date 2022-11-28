import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyMonitorChangeTypesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyMonitorChangeTypesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: CompanyMonitorChangeTypesListSecurity;
}


export class CompanyMonitorChangeTypesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyMonitorChangeTypesList200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  companyMonitorChangeTypesListDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
