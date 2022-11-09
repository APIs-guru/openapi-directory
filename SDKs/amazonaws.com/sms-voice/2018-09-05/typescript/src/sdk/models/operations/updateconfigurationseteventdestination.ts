import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateConfigurationSetEventDestinationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" })
  configurationSetName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EventDestinationName" })
  eventDestinationName: string;
}


export class UpdateConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
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


// UpdateConfigurationSetEventDestinationRequestBodyEventDestination
/** 
 * An object that defines a single event destination.
**/
export class UpdateConfigurationSetEventDestinationRequestBodyEventDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLogsDestination" })
  cloudWatchLogsDestination?: shared.CloudWatchLogsDestination;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=KinesisFirehoseDestination" })
  kinesisFirehoseDestination?: shared.KinesisFirehoseDestination;

  @Metadata({ data: "json, name=MatchingEventTypes" })
  matchingEventTypes?: shared.EventTypeEnum[];

  @Metadata({ data: "json, name=SnsDestination" })
  snsDestination?: shared.SnsDestination;
}


export class UpdateConfigurationSetEventDestinationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventDestination" })
  eventDestination?: UpdateConfigurationSetEventDestinationRequestBodyEventDestination;
}


export class UpdateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateConfigurationSetEventDestinationPathParams;

  @Metadata()
  headers: UpdateConfigurationSetEventDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateConfigurationSetEventDestinationRequestBody;
}


export class UpdateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateConfigurationSetEventDestinationResponse?: Map<string, any>;
}
