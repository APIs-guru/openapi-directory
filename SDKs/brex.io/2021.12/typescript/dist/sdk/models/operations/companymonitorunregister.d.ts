import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompanyMonitorUnregisterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CompanyMonitorUnregisterSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyMonitorUnregisterRequest extends SpeakeasyBase {
    pathParams: CompanyMonitorUnregisterPathParams;
    security: CompanyMonitorUnregisterSecurity;
}
export declare class CompanyMonitorUnregisterResponse extends SpeakeasyBase {
    companyMonitorUnregisterDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
