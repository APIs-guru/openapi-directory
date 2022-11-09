import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutStorageConfigurationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// PutStorageConfigurationRequestBodyMultiLayerStorage
/** 
 * Contains information about the storage destination.
**/
export class PutStorageConfigurationRequestBodyMultiLayerStorage extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManagedS3Storage" })
  customerManagedS3Storage?: shared.CustomerManagedS3Storage;
}

export enum PutStorageConfigurationRequestBodyStorageTypeEnum {
    SitewiseDefaultStorage = "SITEWISE_DEFAULT_STORAGE"
,    MultiLayerStorage = "MULTI_LAYER_STORAGE"
}


export class PutStorageConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=multiLayerStorage" })
  multiLayerStorage?: PutStorageConfigurationRequestBodyMultiLayerStorage;

  @Metadata({ data: "json, name=storageType" })
  storageType: PutStorageConfigurationRequestBodyStorageTypeEnum;
}


export class PutStorageConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutStorageConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutStorageConfigurationRequestBody;
}


export class PutStorageConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  conflictingOperationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  putStorageConfigurationResponse?: shared.PutStorageConfigurationResponse;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
