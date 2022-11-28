import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
import { EndpointDemographic } from "./endpointdemographic";
import { EndpointLocation } from "./endpointlocation";
import { EndpointUser } from "./endpointuser";
/**
 * Provides information about the channel type and other settings for an endpoint.
**/
export declare class EndpointResponse extends SpeakeasyBase {
    address?: string;
    applicationId?: string;
    attributes?: Map<string, string[]>;
    channelType?: ChannelTypeEnum;
    cohortId?: string;
    creationDate?: string;
    demographic?: EndpointDemographic;
    effectiveDate?: string;
    endpointStatus?: string;
    id?: string;
    location?: EndpointLocation;
    metrics?: Map<string, number>;
    optOut?: string;
    requestId?: string;
    user?: EndpointUser;
}
