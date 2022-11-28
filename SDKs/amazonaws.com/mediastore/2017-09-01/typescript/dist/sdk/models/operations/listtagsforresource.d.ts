import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsForResourceXAmzTargetEnum {
    MediaStore20170901ListTagsForResource = "MediaStore_20170901.ListTagsForResource"
}
export declare class ListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForResourceXAmzTargetEnum;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    headers: ListTagsForResourceHeaders;
    request: shared.ListTagsForResourceInput;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    listTagsForResourceOutput?: shared.ListTagsForResourceOutput;
    statusCode: number;
}
