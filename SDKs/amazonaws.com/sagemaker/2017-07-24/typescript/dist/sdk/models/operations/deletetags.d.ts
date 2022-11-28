import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTagsXAmzTargetEnum {
    SageMakerDeleteTags = "SageMaker.DeleteTags"
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
    deleteTagsOutput?: Map<string, any>;
    statusCode: number;
}
