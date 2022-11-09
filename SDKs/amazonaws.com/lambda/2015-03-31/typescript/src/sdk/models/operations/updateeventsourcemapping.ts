import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEventSourceMappingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=UUID" })
  uuid: string;
}


export class UpdateEventSourceMappingHeaders extends SpeakeasyBase {
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


// UpdateEventSourceMappingRequestBodyDestinationConfig
/** 
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export class UpdateEventSourceMappingRequestBodyDestinationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=OnFailure" })
  onFailure?: shared.OnFailure;

  @Metadata({ data: "json, name=OnSuccess" })
  onSuccess?: shared.OnSuccess;
}


export class UpdateEventSourceMappingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @Metadata({ data: "json, name=BisectBatchOnFunctionError" })
  bisectBatchOnFunctionError?: boolean;

  @Metadata({ data: "json, name=DestinationConfig" })
  destinationConfig?: UpdateEventSourceMappingRequestBodyDestinationConfig;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @Metadata({ data: "json, name=FunctionResponseTypes" })
  functionResponseTypes?: shared.FunctionResponseTypeEnum[];

  @Metadata({ data: "json, name=MaximumBatchingWindowInSeconds" })
  maximumBatchingWindowInSeconds?: number;

  @Metadata({ data: "json, name=MaximumRecordAgeInSeconds" })
  maximumRecordAgeInSeconds?: number;

  @Metadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts?: number;

  @Metadata({ data: "json, name=ParallelizationFactor" })
  parallelizationFactor?: number;

  @Metadata({ data: "json, name=SourceAccessConfigurations", elemType: shared.SourceAccessConfiguration })
  sourceAccessConfigurations?: shared.SourceAccessConfiguration[];

  @Metadata({ data: "json, name=TumblingWindowInSeconds" })
  tumblingWindowInSeconds?: number;
}


export class UpdateEventSourceMappingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEventSourceMappingPathParams;

  @Metadata()
  headers: UpdateEventSourceMappingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateEventSourceMappingRequestBody;
}


export class UpdateEventSourceMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventSourceMappingConfiguration?: shared.EventSourceMappingConfiguration;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
