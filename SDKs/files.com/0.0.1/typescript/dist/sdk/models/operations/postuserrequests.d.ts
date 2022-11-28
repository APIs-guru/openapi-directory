import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUserRequestsRequestBody extends SpeakeasyBase {
    details: string;
    email: string;
    name: string;
}
export declare class PostUserRequestsRequest extends SpeakeasyBase {
    request: PostUserRequestsRequestBody;
}
export declare class PostUserRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRequestEntity?: shared.UserRequestEntity;
}
