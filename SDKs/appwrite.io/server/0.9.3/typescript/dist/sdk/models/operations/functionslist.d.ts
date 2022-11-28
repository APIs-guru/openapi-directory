import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FunctionsListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderType?: string;
    search?: string;
}
export declare class FunctionsListSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class FunctionsListRequest extends SpeakeasyBase {
    queryParams: FunctionsListQueryParams;
    security: FunctionsListSecurity;
}
export declare class FunctionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    functionList?: shared.FunctionList;
}
