import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSessionsRequestBody extends SpeakeasyBase {
    otp?: string;
    partialSessionId?: string;
    password?: string;
    username?: string;
}
export declare class PostSessionsRequest extends SpeakeasyBase {
    request?: PostSessionsRequestBody;
}
export declare class PostSessionsResponse extends SpeakeasyBase {
    contentType: string;
    sessionEntity?: shared.SessionEntity;
    statusCode: number;
}
