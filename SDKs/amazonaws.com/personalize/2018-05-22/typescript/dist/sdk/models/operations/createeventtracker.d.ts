import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateEventTrackerXAmzTargetEnum {
    AmazonPersonalizeCreateEventTracker = "AmazonPersonalize.CreateEventTracker"
}
export declare class CreateEventTrackerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEventTrackerXAmzTargetEnum;
}
export declare class CreateEventTrackerRequest extends SpeakeasyBase {
    headers: CreateEventTrackerHeaders;
    request: shared.CreateEventTrackerRequest;
}
export declare class CreateEventTrackerResponse extends SpeakeasyBase {
    contentType: string;
    createEventTrackerResponse?: shared.CreateEventTrackerResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
