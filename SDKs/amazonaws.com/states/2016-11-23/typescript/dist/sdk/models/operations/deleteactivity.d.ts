import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteActivityXAmzTargetEnum {
    AwsStepFunctionsDeleteActivity = "AWSStepFunctions.DeleteActivity"
}
export declare class DeleteActivityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteActivityXAmzTargetEnum;
}
export declare class DeleteActivityRequest extends SpeakeasyBase {
    headers: DeleteActivityHeaders;
    request: shared.DeleteActivityInput;
}
export declare class DeleteActivityResponse extends SpeakeasyBase {
    contentType: string;
    deleteActivityOutput?: Map<string, any>;
    invalidArn?: any;
    statusCode: number;
}
