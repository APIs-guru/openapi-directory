import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateRecordingConfigurationHeaders extends SpeakeasyBase {
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


// CreateRecordingConfigurationRequestBodyDestinationConfiguration
/** 
 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
**/
export class CreateRecordingConfigurationRequestBodyDestinationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3" })
  s3?: shared.S3DestinationConfiguration;
}


export class CreateRecordingConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationConfiguration" })
  destinationConfiguration: CreateRecordingConfigurationRequestBodyDestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateRecordingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateRecordingConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateRecordingConfigurationRequestBody;
}


export class CreateRecordingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createRecordingConfigurationResponse?: shared.CreateRecordingConfigurationResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  pendingVerification?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
