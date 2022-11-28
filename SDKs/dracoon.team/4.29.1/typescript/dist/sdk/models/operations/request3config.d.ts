import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Request3ConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class Request3ConfigRequest extends SpeakeasyBase {
    headers: Request3ConfigHeaders;
}
export declare class Request3ConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    s3Config?: shared.S3Config;
    statusCode: number;
}
