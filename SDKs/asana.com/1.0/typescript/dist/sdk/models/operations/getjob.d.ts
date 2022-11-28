import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJobPathParams extends SpeakeasyBase {
    jobGid: string;
}
export declare class GetJobQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetJob200ApplicationJson extends SpeakeasyBase {
    data?: shared.JobResponse;
}
export declare class GetJobRequest extends SpeakeasyBase {
    pathParams: GetJobPathParams;
    queryParams: GetJobQueryParams;
}
export declare class GetJobResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getJob200ApplicationJsonObject?: GetJob200ApplicationJson;
}
