import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SupportingWorkPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class SupportingWorkQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class SupportingWork200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectCompact[];
}
export declare class SupportingWorkRequest extends SpeakeasyBase {
    pathParams: SupportingWorkPathParams;
    queryParams: SupportingWorkQueryParams;
}
export declare class SupportingWorkResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    supportingWork200ApplicationJsonObject?: SupportingWork200ApplicationJson;
}
