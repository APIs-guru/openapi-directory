import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AddApplicationInputXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationInput = "KinesisAnalytics_20180523.AddApplicationInput"
}
export declare class AddApplicationInputHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationInputXAmzTargetEnum;
}
export declare class AddApplicationInputRequest extends SpeakeasyBase {
    headers: AddApplicationInputHeaders;
    request: shared.AddApplicationInputRequest;
}
export declare class AddApplicationInputResponse extends SpeakeasyBase {
    addApplicationInputResponse?: shared.AddApplicationInputResponse;
    codeValidationException?: any;
    concurrentModificationException?: any;
    contentType: string;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
