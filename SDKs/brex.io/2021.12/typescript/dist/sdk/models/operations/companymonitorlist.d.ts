import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompanyMonitorListSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyMonitorListRequest extends SpeakeasyBase {
    security: CompanyMonitorListSecurity;
}
export declare class CompanyMonitorListResponse extends SpeakeasyBase {
    companyMonitorList200ApplicationJsonAnies?: any[];
    companyMonitorListDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
