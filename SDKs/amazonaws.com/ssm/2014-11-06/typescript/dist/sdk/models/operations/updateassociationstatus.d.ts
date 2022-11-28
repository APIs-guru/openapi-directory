import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAssociationStatusXAmzTargetEnum {
    AmazonSsmUpdateAssociationStatus = "AmazonSSM.UpdateAssociationStatus"
}
export declare class UpdateAssociationStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAssociationStatusXAmzTargetEnum;
}
export declare class UpdateAssociationStatusRequest extends SpeakeasyBase {
    headers: UpdateAssociationStatusHeaders;
    request: shared.UpdateAssociationStatusRequest;
}
export declare class UpdateAssociationStatusResponse extends SpeakeasyBase {
    associationDoesNotExist?: any;
    contentType: string;
    internalServerError?: any;
    invalidDocument?: any;
    invalidInstanceId?: any;
    statusCode: number;
    statusUnchanged?: any;
    tooManyUpdates?: any;
    updateAssociationStatusResult?: shared.UpdateAssociationStatusResult;
}
