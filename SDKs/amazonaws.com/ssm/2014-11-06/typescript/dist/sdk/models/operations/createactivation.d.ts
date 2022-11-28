import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateActivationXAmzTargetEnum {
    AmazonSsmCreateActivation = "AmazonSSM.CreateActivation"
}
export declare class CreateActivationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateActivationXAmzTargetEnum;
}
export declare class CreateActivationRequest extends SpeakeasyBase {
    headers: CreateActivationHeaders;
    request: shared.CreateActivationRequest;
}
export declare class CreateActivationResponse extends SpeakeasyBase {
    contentType: string;
    createActivationResult?: shared.CreateActivationResult;
    internalServerError?: any;
    statusCode: number;
}
