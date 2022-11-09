import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteFilterXAmzTargetEnum {
    AmazonPersonalizeDeleteFilter = "AmazonPersonalize.DeleteFilter"
}
export declare class DeleteFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFilterXAmzTargetEnum;
}
export declare class DeleteFilterRequest extends SpeakeasyBase {
    headers: DeleteFilterHeaders;
    request: shared.DeleteFilterRequest;
}
export declare class DeleteFilterResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
