import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateResourceDataSyncXAmzTargetEnum {
    AmazonSsmUpdateResourceDataSync = "AmazonSSM.UpdateResourceDataSync"
}
export declare class UpdateResourceDataSyncHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResourceDataSyncXAmzTargetEnum;
}
export declare class UpdateResourceDataSyncRequest extends SpeakeasyBase {
    headers: UpdateResourceDataSyncHeaders;
    request: shared.UpdateResourceDataSyncRequest;
}
export declare class UpdateResourceDataSyncResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    resourceDataSyncConflictException?: any;
    resourceDataSyncInvalidConfigurationException?: any;
    resourceDataSyncNotFoundException?: any;
    statusCode: number;
    updateResourceDataSyncResult?: Map<string, any>;
}
