import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthGetQueueFunctionsSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetQueueFunctionsRequest extends SpeakeasyBase {
    security: HealthGetQueueFunctionsSecurity;
}
export declare class HealthGetQueueFunctionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
