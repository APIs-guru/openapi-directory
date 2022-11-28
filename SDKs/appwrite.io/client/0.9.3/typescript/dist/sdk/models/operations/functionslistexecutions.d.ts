import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FunctionsListExecutionsPathParams extends SpeakeasyBase {
    functionId: string;
}
export declare class FunctionsListExecutionsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderType?: string;
    search?: string;
}
export declare class FunctionsListExecutionsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class FunctionsListExecutionsRequest extends SpeakeasyBase {
    pathParams: FunctionsListExecutionsPathParams;
    queryParams: FunctionsListExecutionsQueryParams;
    security: FunctionsListExecutionsSecurity;
}
export declare class FunctionsListExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    executionList?: shared.ExecutionList;
}
