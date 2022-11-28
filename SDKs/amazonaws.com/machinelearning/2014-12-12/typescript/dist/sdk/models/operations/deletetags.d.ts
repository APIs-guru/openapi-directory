import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTagsXAmzTargetEnum {
    AmazonMl20141212DeleteTags = "AmazonML_20141212.DeleteTags"
}
export declare class DeleteTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTagsXAmzTargetEnum;
}
export declare class DeleteTagsRequest extends SpeakeasyBase {
    headers: DeleteTagsHeaders;
    request: shared.DeleteTagsInput;
}
export declare class DeleteTagsResponse extends SpeakeasyBase {
    contentType: string;
    deleteTagsOutput?: shared.DeleteTagsOutput;
    internalServerException?: any;
    invalidInputException?: any;
    invalidTagException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
