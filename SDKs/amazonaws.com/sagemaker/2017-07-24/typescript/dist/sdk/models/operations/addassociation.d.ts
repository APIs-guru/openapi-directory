import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddAssociationXAmzTargetEnum {
    SageMakerAddAssociation = "SageMaker.AddAssociation"
}
export declare class AddAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddAssociationXAmzTargetEnum;
}
export declare class AddAssociationRequest extends SpeakeasyBase {
    headers: AddAssociationHeaders;
    request: shared.AddAssociationRequest;
}
export declare class AddAssociationResponse extends SpeakeasyBase {
    addAssociationResponse?: shared.AddAssociationResponse;
    contentType: string;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    statusCode: number;
}
