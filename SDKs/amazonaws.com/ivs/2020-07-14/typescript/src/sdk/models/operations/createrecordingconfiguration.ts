import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRecordingConfigurationHeaders extends SpeakeasyBase {
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


// CreateRecordingConfigurationRequestBodyDestinationConfiguration
/** 
 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
**/
export class CreateRecordingConfigurationRequestBodyDestinationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3" })
  s3?: shared.S3DestinationConfiguration;
}


export class CreateRecordingConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationConfiguration" })
  destinationConfiguration: CreateRecordingConfigurationRequestBodyDestinationConfiguration;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateRecordingConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRecordingConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateRecordingConfigurationRequestBody;
}


export class CreateRecordingConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createRecordingConfigurationResponse?: shared.CreateRecordingConfigurationResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  pendingVerification?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
