import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAssociationXAmzTargetEnum {
    AmazonSsmUpdateAssociation = "AmazonSSM.UpdateAssociation"
}
export declare class UpdateAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAssociationXAmzTargetEnum;
}
export declare class UpdateAssociationRequest extends SpeakeasyBase {
    headers: UpdateAssociationHeaders;
    request: shared.UpdateAssociationRequest;
}
export declare class UpdateAssociationResponse extends SpeakeasyBase {
    associationDoesNotExist?: any;
    associationVersionLimitExceeded?: any;
    contentType: string;
    internalServerError?: any;
    invalidAssociationVersion?: any;
    invalidDocument?: any;
    invalidDocumentVersion?: any;
    invalidOutputLocation?: any;
    invalidParameters?: any;
    invalidSchedule?: any;
    invalidTarget?: any;
    invalidUpdate?: any;
    statusCode: number;
    tooManyUpdates?: any;
    updateAssociationResult?: shared.UpdateAssociationResult;
}
