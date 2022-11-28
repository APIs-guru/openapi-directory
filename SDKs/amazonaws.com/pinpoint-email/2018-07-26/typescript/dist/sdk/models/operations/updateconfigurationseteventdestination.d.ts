import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateConfigurationSetEventDestinationPathParams extends SpeakeasyBase {
    configurationSetName: string;
    eventDestinationName: string;
}
export declare class UpdateConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
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
export declare class UpdateConfigurationSetEventDestinationRequestBodyEventDestination extends SpeakeasyBase {
    cloudWatchDestination?: shared.CloudWatchDestination;
    enabled?: boolean;
    kinesisFirehoseDestination?: shared.KinesisFirehoseDestination;
    matchingEventTypes?: shared.EventTypeEnum[];
    pinpointDestination?: shared.PinpointDestination;
    snsDestination?: shared.SnsDestination;
}
export declare class UpdateConfigurationSetEventDestinationRequestBody extends SpeakeasyBase {
    eventDestination: UpdateConfigurationSetEventDestinationRequestBodyEventDestination;
}
export declare class UpdateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    pathParams: UpdateConfigurationSetEventDestinationPathParams;
    headers: UpdateConfigurationSetEventDestinationHeaders;
    request: UpdateConfigurationSetEventDestinationRequestBody;
}
export declare class UpdateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateConfigurationSetEventDestinationResponse?: Map<string, any>;
}
