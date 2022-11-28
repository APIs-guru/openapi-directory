import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListResourceTagsXAmzTargetEnum {
    TrentServiceListResourceTags = "TrentService.ListResourceTags"
}
export declare class ListResourceTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourceTagsXAmzTargetEnum;
}
export declare class ListResourceTagsRequest extends SpeakeasyBase {
    headers: ListResourceTagsHeaders;
    request: shared.ListResourceTagsRequest;
}
export declare class ListResourceTagsResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidMarkerException?: any;
    kmsInternalException?: any;
    listResourceTagsResponse?: shared.ListResourceTagsResponse;
    notFoundException?: any;
    statusCode: number;
}
