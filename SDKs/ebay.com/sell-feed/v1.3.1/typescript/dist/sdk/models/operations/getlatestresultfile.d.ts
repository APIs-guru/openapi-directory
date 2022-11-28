import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLatestResultFilePathParams extends SpeakeasyBase {
    scheduleId: string;
}
export declare class GetLatestResultFileSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetLatestResultFileRequest extends SpeakeasyBase {
    pathParams: GetLatestResultFilePathParams;
    security: GetLatestResultFileSecurity;
}
export declare class GetLatestResultFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
