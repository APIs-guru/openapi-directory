import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthGetQueueLogsSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetQueueLogsRequest extends SpeakeasyBase {
    security: HealthGetQueueLogsSecurity;
}
export declare class HealthGetQueueLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
