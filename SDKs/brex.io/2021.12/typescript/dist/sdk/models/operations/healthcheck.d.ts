import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class HealthCheckSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class HealthCheckRequest extends SpeakeasyBase {
    security: HealthCheckSecurity;
}
export declare class HealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    healthCheck200ApplicationJsonAnies?: any[];
    healthCheckDefaultApplicationJsonAny?: any;
    statusCode: number;
}
