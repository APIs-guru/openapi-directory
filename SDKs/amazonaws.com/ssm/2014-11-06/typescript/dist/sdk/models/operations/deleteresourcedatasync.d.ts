import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteResourceDataSyncXAmzTargetEnum {
    AmazonSsmDeleteResourceDataSync = "AmazonSSM.DeleteResourceDataSync"
}
export declare class DeleteResourceDataSyncHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourceDataSyncXAmzTargetEnum;
}
export declare class DeleteResourceDataSyncRequest extends SpeakeasyBase {
    headers: DeleteResourceDataSyncHeaders;
    request: shared.DeleteResourceDataSyncRequest;
}
export declare class DeleteResourceDataSyncResponse extends SpeakeasyBase {
    contentType: string;
    deleteResourceDataSyncResult?: Map<string, any>;
    internalServerError?: any;
    resourceDataSyncInvalidConfigurationException?: any;
    resourceDataSyncNotFoundException?: any;
    statusCode: number;
}
