import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTagsPathParams extends SpeakeasyBase {
    arn: string;
}
export declare class ListTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsRequest extends SpeakeasyBase {
    pathParams: ListTagsPathParams;
    headers: ListTagsHeaders;
}
export declare class ListTagsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listTagsResponse?: shared.ListTagsResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
