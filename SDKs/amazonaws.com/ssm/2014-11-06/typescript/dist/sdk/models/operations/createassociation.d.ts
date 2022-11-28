import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAssociationXAmzTargetEnum {
    AmazonSsmCreateAssociation = "AmazonSSM.CreateAssociation"
}
export declare class CreateAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAssociationXAmzTargetEnum;
}
export declare class CreateAssociationRequest extends SpeakeasyBase {
    headers: CreateAssociationHeaders;
    request: shared.CreateAssociationRequest;
}
export declare class CreateAssociationResponse extends SpeakeasyBase {
    associationAlreadyExists?: any;
    associationLimitExceeded?: any;
    contentType: string;
    createAssociationResult?: shared.CreateAssociationResult;
    internalServerError?: any;
    invalidDocument?: any;
    invalidDocumentVersion?: any;
    invalidInstanceId?: any;
    invalidOutputLocation?: any;
    invalidParameters?: any;
    invalidSchedule?: any;
    invalidTarget?: any;
    statusCode: number;
    unsupportedPlatformType?: any;
}
