import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateEventSourceMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UUID" })
  uuid: string;
}


export class UpdateEventSourceMappingHeaders extends SpeakeasyBase {
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


// UpdateEventSourceMappingRequestBodyDestinationConfig
/** 
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export class UpdateEventSourceMappingRequestBodyDestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OnFailure" })
  onFailure?: shared.OnFailure;

  @SpeakeasyMetadata({ data: "json, name=OnSuccess" })
  onSuccess?: shared.OnSuccess;
}


export class UpdateEventSourceMappingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @SpeakeasyMetadata({ data: "json, name=BisectBatchOnFunctionError" })
  bisectBatchOnFunctionError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DestinationConfig" })
  destinationConfig?: UpdateEventSourceMappingRequestBodyDestinationConfig;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionResponseTypes" })
  functionResponseTypes?: shared.FunctionResponseTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MaximumBatchingWindowInSeconds" })
  maximumBatchingWindowInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumRecordAgeInSeconds" })
  maximumRecordAgeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=ParallelizationFactor" })
  parallelizationFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=SourceAccessConfigurations", elemType: shared.SourceAccessConfiguration })
  sourceAccessConfigurations?: shared.SourceAccessConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=TumblingWindowInSeconds" })
  tumblingWindowInSeconds?: number;
}


export class UpdateEventSourceMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEventSourceMappingPathParams;

  @SpeakeasyMetadata()
  headers: UpdateEventSourceMappingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateEventSourceMappingRequestBody;
}


export class UpdateEventSourceMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventSourceMappingConfiguration?: shared.EventSourceMappingConfiguration;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
