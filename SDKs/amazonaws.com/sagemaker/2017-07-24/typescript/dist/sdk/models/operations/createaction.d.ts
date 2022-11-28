import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateActionXAmzTargetEnum {
    SageMakerCreateAction = "SageMaker.CreateAction"
}
export declare class CreateActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateActionXAmzTargetEnum;
}
export declare class CreateActionRequest extends SpeakeasyBase {
    headers: CreateActionHeaders;
    request: shared.CreateActionRequest;
}
export declare class CreateActionResponse extends SpeakeasyBase {
    contentType: string;
    createActionResponse?: shared.CreateActionResponse;
    resourceLimitExceeded?: any;
    statusCode: number;
}
