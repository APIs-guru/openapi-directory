import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyMonitorChangeTypesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyMonitorChangeTypesListRequest extends SpeakeasyBase {
  @Metadata()
  security: CompanyMonitorChangeTypesListSecurity;
}


export class CompanyMonitorChangeTypesListResponse extends SpeakeasyBase {
  @Metadata()
  companyMonitorChangeTypesList200ApplicationJsonStrings?: string[];

  @Metadata()
  companyMonitorChangeTypesListDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
