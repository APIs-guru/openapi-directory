import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddTagsXAmzTargetEnum {
    SageMakerAddTags = "SageMaker.AddTags"
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
    statusCode: number;
}
