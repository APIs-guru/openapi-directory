import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class HealthGetTimeSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetTimeRequest extends SpeakeasyBase {
    security: HealthGetTimeSecurity;
}
export declare class HealthGetTimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
