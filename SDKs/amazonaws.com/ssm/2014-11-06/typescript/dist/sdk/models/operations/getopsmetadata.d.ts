import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetOpsMetadataXAmzTargetEnum {
    AmazonSsmGetOpsMetadata = "AmazonSSM.GetOpsMetadata"
}
export declare class GetOpsMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOpsMetadataXAmzTargetEnum;
}
export declare class GetOpsMetadataRequest extends SpeakeasyBase {
    headers: GetOpsMetadataHeaders;
    request: shared.GetOpsMetadataRequest;
}
export declare class GetOpsMetadataResponse extends SpeakeasyBase {
    contentType: string;
    getOpsMetadataResult?: shared.GetOpsMetadataResult;
    internalServerError?: any;
    opsMetadataInvalidArgumentException?: any;
    opsMetadataNotFoundException?: any;
    statusCode: number;
}
