import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateOpsMetadataXAmzTargetEnum {
    AmazonSsmUpdateOpsMetadata = "AmazonSSM.UpdateOpsMetadata"
}
export declare class UpdateOpsMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateOpsMetadataXAmzTargetEnum;
}
export declare class UpdateOpsMetadataRequest extends SpeakeasyBase {
    headers: UpdateOpsMetadataHeaders;
    request: shared.UpdateOpsMetadataRequest;
}
export declare class UpdateOpsMetadataResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    opsMetadataInvalidArgumentException?: any;
    opsMetadataKeyLimitExceededException?: any;
    opsMetadataNotFoundException?: any;
    opsMetadataTooManyUpdatesException?: any;
    statusCode: number;
    updateOpsMetadataResult?: shared.UpdateOpsMetadataResult;
}
