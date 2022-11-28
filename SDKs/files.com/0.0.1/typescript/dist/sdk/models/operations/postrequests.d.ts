import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRequestsRequestBody extends SpeakeasyBase {
    destination: string;
    groupIds?: string;
    path: string;
    userIds?: string;
}
export declare class PostRequestsRequest extends SpeakeasyBase {
    request: PostRequestsRequestBody;
}
export declare class PostRequestsResponse extends SpeakeasyBase {
    contentType: string;
    requestEntity?: shared.RequestEntity;
    statusCode: number;
}
