import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateConfigurationSetEventDestinationPathParams extends SpeakeasyBase {
    configurationSetName: string;
}
export declare class CreateConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
**/
export declare class CreateConfigurationSetEventDestinationRequestBodyEventDestination extends SpeakeasyBase {
    cloudWatchDestination?: shared.CloudWatchDestination;
    enabled?: boolean;
    kinesisFirehoseDestination?: shared.KinesisFirehoseDestination;
    matchingEventTypes?: shared.EventTypeEnum[];
    pinpointDestination?: shared.PinpointDestination;
    snsDestination?: shared.SnsDestination;
}
export declare class CreateConfigurationSetEventDestinationRequestBody extends SpeakeasyBase {
    eventDestination: CreateConfigurationSetEventDestinationRequestBodyEventDestination;
    eventDestinationName: string;
}
export declare class CreateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    pathParams: CreateConfigurationSetEventDestinationPathParams;
    headers: CreateConfigurationSetEventDestinationHeaders;
    request: CreateConfigurationSetEventDestinationRequestBody;
}
export declare class CreateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    badRequestException?: any;
    contentType: string;
    createConfigurationSetEventDestinationResponse?: Map<string, any>;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
