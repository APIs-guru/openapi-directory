import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AddTagsXAmzTargetEnum {
    AmazonMl20141212AddTags = "AmazonML_20141212.AddTags"
}
export declare class AddTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsXAmzTargetEnum;
}
export declare class AddTagsRequest extends SpeakeasyBase {
    headers: AddTagsHeaders;
    request: shared.AddTagsInput;
}
export declare class AddTagsResponse extends SpeakeasyBase {
    addTagsOutput?: shared.AddTagsOutput;
    contentType: string;
    internalServerException?: any;
    invalidInputException?: any;
    invalidTagException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagLimitExceededException?: any;
}
