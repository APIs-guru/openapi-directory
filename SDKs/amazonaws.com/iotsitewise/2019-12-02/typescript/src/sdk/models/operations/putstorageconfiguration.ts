import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutStorageConfigurationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// PutStorageConfigurationRequestBodyMultiLayerStorage
/** 
 * Contains information about the storage destination.
**/
export class PutStorageConfigurationRequestBodyMultiLayerStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedS3Storage" })
  customerManagedS3Storage?: shared.CustomerManagedS3Storage;
}

export enum PutStorageConfigurationRequestBodyStorageTypeEnum {
    SitewiseDefaultStorage = "SITEWISE_DEFAULT_STORAGE",
    MultiLayerStorage = "MULTI_LAYER_STORAGE"
}


export class PutStorageConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=multiLayerStorage" })
  multiLayerStorage?: PutStorageConfigurationRequestBodyMultiLayerStorage;

  @SpeakeasyMetadata({ data: "json, name=storageType" })
  storageType: PutStorageConfigurationRequestBodyStorageTypeEnum;
}


export class PutStorageConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutStorageConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutStorageConfigurationRequestBody;
}


export class PutStorageConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingOperationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  putStorageConfigurationResponse?: shared.PutStorageConfigurationResponse;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
