import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthGetQueueUsageSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetQueueUsageRequest extends SpeakeasyBase {
    security: HealthGetQueueUsageSecurity;
}
export declare class HealthGetQueueUsageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
