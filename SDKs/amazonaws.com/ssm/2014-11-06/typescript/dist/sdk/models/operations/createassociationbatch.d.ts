import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAssociationBatchXAmzTargetEnum {
    AmazonSsmCreateAssociationBatch = "AmazonSSM.CreateAssociationBatch"
}
export declare class CreateAssociationBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAssociationBatchXAmzTargetEnum;
}
export declare class CreateAssociationBatchRequest extends SpeakeasyBase {
    headers: CreateAssociationBatchHeaders;
    request: shared.CreateAssociationBatchRequest;
}
export declare class CreateAssociationBatchResponse extends SpeakeasyBase {
    associationLimitExceeded?: any;
    contentType: string;
    createAssociationBatchResult?: shared.CreateAssociationBatchResult;
    duplicateInstanceId?: any;
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
