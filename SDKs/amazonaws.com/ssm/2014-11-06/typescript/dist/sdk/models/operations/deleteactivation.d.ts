import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteActivationXAmzTargetEnum {
    AmazonSsmDeleteActivation = "AmazonSSM.DeleteActivation"
}
export declare class DeleteActivationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteActivationXAmzTargetEnum;
}
export declare class DeleteActivationRequest extends SpeakeasyBase {
    headers: DeleteActivationHeaders;
    request: shared.DeleteActivationRequest;
}
export declare class DeleteActivationResponse extends SpeakeasyBase {
    contentType: string;
    deleteActivationResult?: Map<string, any>;
    internalServerError?: any;
    invalidActivation?: any;
    invalidActivationId?: any;
    statusCode: number;
    tooManyUpdates?: any;
}
