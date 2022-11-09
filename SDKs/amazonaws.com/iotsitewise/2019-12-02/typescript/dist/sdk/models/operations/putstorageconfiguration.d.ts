import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutStorageConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains information about the storage destination.
**/
export declare class PutStorageConfigurationRequestBodyMultiLayerStorage extends SpeakeasyBase {
    customerManagedS3Storage?: shared.CustomerManagedS3Storage;
}
export declare enum PutStorageConfigurationRequestBodyStorageTypeEnum {
    SitewiseDefaultStorage = "SITEWISE_DEFAULT_STORAGE",
    MultiLayerStorage = "MULTI_LAYER_STORAGE"
}
export declare class PutStorageConfigurationRequestBody extends SpeakeasyBase {
    multiLayerStorage?: PutStorageConfigurationRequestBodyMultiLayerStorage;
    storageType: PutStorageConfigurationRequestBodyStorageTypeEnum;
}
export declare class PutStorageConfigurationRequest extends SpeakeasyBase {
    headers: PutStorageConfigurationHeaders;
    request: PutStorageConfigurationRequestBody;
}
export declare class PutStorageConfigurationResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    putStorageConfigurationResponse?: shared.PutStorageConfigurationResponse;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
