import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompanyMonitorIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CompanyMonitorIdSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyMonitorIdRequest extends SpeakeasyBase {
    pathParams: CompanyMonitorIdPathParams;
    security: CompanyMonitorIdSecurity;
}
export declare class CompanyMonitorIdResponse extends SpeakeasyBase {
    companyMonitorId200ApplicationJsonAnies?: any[];
    companyMonitorIdDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
