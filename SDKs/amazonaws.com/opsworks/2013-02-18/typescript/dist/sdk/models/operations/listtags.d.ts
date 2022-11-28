import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsXAmzTargetEnum {
    OpsWorks20130218ListTags = "OpsWorks_20130218.ListTags"
}
export declare class ListTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsXAmzTargetEnum;
}
export declare class ListTagsRequest extends SpeakeasyBase {
    headers: ListTagsHeaders;
    request: shared.ListTagsRequest;
}
export declare class ListTagsResponse extends SpeakeasyBase {
    contentType: string;
    listTagsResult?: shared.ListTagsResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
