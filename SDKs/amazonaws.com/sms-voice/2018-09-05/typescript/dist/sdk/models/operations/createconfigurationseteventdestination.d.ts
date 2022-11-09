import { SpeakeasyBase } from "../../../internal/utils/utils";
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
 * An object that defines a single event destination.
**/
export declare class CreateConfigurationSetEventDestinationRequestBodyEventDestination extends SpeakeasyBase {
    cloudWatchLogsDestination?: shared.CloudWatchLogsDestination;
    enabled?: boolean;
    kinesisFirehoseDestination?: shared.KinesisFirehoseDestination;
    matchingEventTypes?: shared.EventTypeEnum[];
    snsDestination?: shared.SnsDestination;
}
export declare class CreateConfigurationSetEventDestinationRequestBody extends SpeakeasyBase {
    eventDestination?: CreateConfigurationSetEventDestinationRequestBodyEventDestination;
    eventDestinationName?: string;
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
    internalServiceErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
