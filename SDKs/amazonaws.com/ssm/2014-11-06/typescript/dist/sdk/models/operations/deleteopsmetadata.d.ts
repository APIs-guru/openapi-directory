import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteOpsMetadataXAmzTargetEnum {
    AmazonSsmDeleteOpsMetadata = "AmazonSSM.DeleteOpsMetadata"
}
export declare class DeleteOpsMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteOpsMetadataXAmzTargetEnum;
}
export declare class DeleteOpsMetadataRequest extends SpeakeasyBase {
    headers: DeleteOpsMetadataHeaders;
    request: shared.DeleteOpsMetadataRequest;
}
export declare class DeleteOpsMetadataResponse extends SpeakeasyBase {
    contentType: string;
    deleteOpsMetadataResult?: Map<string, any>;
    internalServerError?: any;
    opsMetadataInvalidArgumentException?: any;
    opsMetadataNotFoundException?: any;
    statusCode: number;
}
