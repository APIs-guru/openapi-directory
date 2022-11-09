import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompanyMonitorChangeTypesListSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyMonitorChangeTypesListRequest extends SpeakeasyBase {
    security: CompanyMonitorChangeTypesListSecurity;
}
export declare class CompanyMonitorChangeTypesListResponse extends SpeakeasyBase {
    companyMonitorChangeTypesList200ApplicationJsonStrings?: string[];
    companyMonitorChangeTypesListDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
