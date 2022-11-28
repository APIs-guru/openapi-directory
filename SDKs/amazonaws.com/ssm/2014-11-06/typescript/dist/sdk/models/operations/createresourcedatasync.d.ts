import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateResourceDataSyncXAmzTargetEnum {
    AmazonSsmCreateResourceDataSync = "AmazonSSM.CreateResourceDataSync"
}
export declare class CreateResourceDataSyncHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResourceDataSyncXAmzTargetEnum;
}
export declare class CreateResourceDataSyncRequest extends SpeakeasyBase {
    headers: CreateResourceDataSyncHeaders;
    request: shared.CreateResourceDataSyncRequest;
}
export declare class CreateResourceDataSyncResponse extends SpeakeasyBase {
    contentType: string;
    createResourceDataSyncResult?: Map<string, any>;
    internalServerError?: any;
    resourceDataSyncAlreadyExistsException?: any;
    resourceDataSyncCountExceededException?: any;
    resourceDataSyncInvalidConfigurationException?: any;
    statusCode: number;
}
