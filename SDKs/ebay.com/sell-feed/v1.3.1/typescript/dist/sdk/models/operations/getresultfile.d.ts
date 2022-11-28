import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResultFilePathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetResultFileSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetResultFileRequest extends SpeakeasyBase {
    pathParams: GetResultFilePathParams;
    security: GetResultFileSecurity;
}
export declare class GetResultFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
