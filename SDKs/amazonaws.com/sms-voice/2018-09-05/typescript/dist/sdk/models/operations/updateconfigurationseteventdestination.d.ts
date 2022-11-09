import { SpeakeasyBase } from "../../../internal/utils/utils";
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
 * An object that defines a single event destination.
**/
export declare class UpdateConfigurationSetEventDestinationRequestBodyEventDestination extends SpeakeasyBase {
    cloudWatchLogsDestination?: shared.CloudWatchLogsDestination;
    enabled?: boolean;
    kinesisFirehoseDestination?: shared.KinesisFirehoseDestination;
    matchingEventTypes?: shared.EventTypeEnum[];
    snsDestination?: shared.SnsDestination;
}
export declare class UpdateConfigurationSetEventDestinationRequestBody extends SpeakeasyBase {
    eventDestination?: UpdateConfigurationSetEventDestinationRequestBodyEventDestination;
}
export declare class UpdateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    pathParams: UpdateConfigurationSetEventDestinationPathParams;
    headers: UpdateConfigurationSetEventDestinationHeaders;
    request: UpdateConfigurationSetEventDestinationRequestBody;
}
export declare class UpdateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateConfigurationSetEventDestinationResponse?: Map<string, any>;
}
