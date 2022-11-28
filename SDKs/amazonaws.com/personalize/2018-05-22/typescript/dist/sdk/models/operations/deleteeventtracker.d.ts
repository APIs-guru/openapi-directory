import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEventTrackerXAmzTargetEnum {
    AmazonPersonalizeDeleteEventTracker = "AmazonPersonalize.DeleteEventTracker"
}
export declare class DeleteEventTrackerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEventTrackerXAmzTargetEnum;
}
export declare class DeleteEventTrackerRequest extends SpeakeasyBase {
    headers: DeleteEventTrackerHeaders;
    request: shared.DeleteEventTrackerRequest;
}
export declare class DeleteEventTrackerResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
