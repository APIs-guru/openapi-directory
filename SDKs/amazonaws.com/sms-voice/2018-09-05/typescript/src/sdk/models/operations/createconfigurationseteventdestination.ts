import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateConfigurationSetEventDestinationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" })
  configurationSetName: string;
}


export class CreateConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
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


// CreateConfigurationSetEventDestinationRequestBodyEventDestination
/** 
 * An object that defines a single event destination.
**/
export class CreateConfigurationSetEventDestinationRequestBodyEventDestination extends SpeakeasyBase {
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


export class CreateConfigurationSetEventDestinationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventDestination" })
  eventDestination?: CreateConfigurationSetEventDestinationRequestBodyEventDestination;

  @Metadata({ data: "json, name=EventDestinationName" })
  eventDestinationName?: string;
}


export class CreateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateConfigurationSetEventDestinationPathParams;

  @Metadata()
  headers: CreateConfigurationSetEventDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateConfigurationSetEventDestinationRequestBody;
}


export class CreateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createConfigurationSetEventDestinationResponse?: Map<string, any>;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
