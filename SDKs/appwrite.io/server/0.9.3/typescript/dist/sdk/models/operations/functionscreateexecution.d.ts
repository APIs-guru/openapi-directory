import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FunctionsCreateExecutionPathParams extends SpeakeasyBase {
    functionId: string;
}
export declare class FunctionsCreateExecutionRequestBody extends SpeakeasyBase {
    data?: string;
}
export declare class FunctionsCreateExecutionSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class FunctionsCreateExecutionRequest extends SpeakeasyBase {
    pathParams: FunctionsCreateExecutionPathParams;
    request?: FunctionsCreateExecutionRequestBody;
    security: FunctionsCreateExecutionSecurity;
}
export declare class FunctionsCreateExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    execution?: shared.Execution;
}
