import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateActivityXAmzTargetEnum {
    AwsStepFunctionsCreateActivity = "AWSStepFunctions.CreateActivity"
}
export declare class CreateActivityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateActivityXAmzTargetEnum;
}
export declare class CreateActivityRequest extends SpeakeasyBase {
    headers: CreateActivityHeaders;
    request: shared.CreateActivityInput;
}
export declare class CreateActivityResponse extends SpeakeasyBase {
    activityLimitExceeded?: any;
    contentType: string;
    createActivityOutput?: shared.CreateActivityOutput;
    invalidName?: any;
    statusCode: number;
    tooManyTags?: any;
}
