import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateConfigurationSetEventDestinationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" })
  configurationSetName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EventDestinationName" })
  eventDestinationName: string;
}


export class UpdateConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
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


// UpdateConfigurationSetEventDestinationRequestBodyEventDestination
/** 
 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
**/
export class UpdateConfigurationSetEventDestinationRequestBodyEventDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchDestination" })
  cloudWatchDestination?: shared.CloudWatchDestination;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KinesisFirehoseDestination" })
  kinesisFirehoseDestination?: shared.KinesisFirehoseDestination;

  @SpeakeasyMetadata({ data: "json, name=MatchingEventTypes" })
  matchingEventTypes?: shared.EventTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=PinpointDestination" })
  pinpointDestination?: shared.PinpointDestination;

  @SpeakeasyMetadata({ data: "json, name=SnsDestination" })
  snsDestination?: shared.SnsDestination;
}


export class UpdateConfigurationSetEventDestinationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventDestination" })
  eventDestination: UpdateConfigurationSetEventDestinationRequestBodyEventDestination;
}


export class UpdateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateConfigurationSetEventDestinationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateConfigurationSetEventDestinationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateConfigurationSetEventDestinationRequestBody;
}


export class UpdateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateConfigurationSetEventDestinationResponse?: Map<string, any>;
}
