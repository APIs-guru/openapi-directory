import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAssociationXAmzTargetEnum {
    AmazonSsmDeleteAssociation = "AmazonSSM.DeleteAssociation"
}
export declare class DeleteAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAssociationXAmzTargetEnum;
}
export declare class DeleteAssociationRequest extends SpeakeasyBase {
    headers: DeleteAssociationHeaders;
    request: shared.DeleteAssociationRequest;
}
export declare class DeleteAssociationResponse extends SpeakeasyBase {
    associationDoesNotExist?: any;
    contentType: string;
    deleteAssociationResult?: Map<string, any>;
    internalServerError?: any;
    invalidDocument?: any;
    invalidInstanceId?: any;
    statusCode: number;
    tooManyUpdates?: any;
}
