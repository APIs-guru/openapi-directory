import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInputFilePathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetInputFileSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetInputFileRequest extends SpeakeasyBase {
    pathParams: GetInputFilePathParams;
    security: GetInputFileSecurity;
}
export declare class GetInputFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
