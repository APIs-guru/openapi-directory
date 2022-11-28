import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FunctionsGetExecutionPathParams extends SpeakeasyBase {
    executionId: string;
    functionId: string;
}
export declare class FunctionsGetExecutionSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class FunctionsGetExecutionRequest extends SpeakeasyBase {
    pathParams: FunctionsGetExecutionPathParams;
    security: FunctionsGetExecutionSecurity;
}
export declare class FunctionsGetExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    execution?: shared.Execution;
}
