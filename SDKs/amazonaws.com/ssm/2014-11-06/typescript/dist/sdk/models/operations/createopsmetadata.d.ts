import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateOpsMetadataXAmzTargetEnum {
    AmazonSsmCreateOpsMetadata = "AmazonSSM.CreateOpsMetadata"
}
export declare class CreateOpsMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateOpsMetadataXAmzTargetEnum;
}
export declare class CreateOpsMetadataRequest extends SpeakeasyBase {
    headers: CreateOpsMetadataHeaders;
    request: shared.CreateOpsMetadataRequest;
}
export declare class CreateOpsMetadataResponse extends SpeakeasyBase {
    contentType: string;
    createOpsMetadataResult?: shared.CreateOpsMetadataResult;
    internalServerError?: any;
    opsMetadataAlreadyExistsException?: any;
    opsMetadataInvalidArgumentException?: any;
    opsMetadataLimitExceededException?: any;
    opsMetadataTooManyUpdatesException?: any;
    statusCode: number;
}
