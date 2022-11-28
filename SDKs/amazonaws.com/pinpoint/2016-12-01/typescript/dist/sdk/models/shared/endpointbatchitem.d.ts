import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
import { EndpointDemographic } from "./endpointdemographic";
import { EndpointLocation } from "./endpointlocation";
import { EndpointUser } from "./endpointuser";
/**
 * Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint.
**/
export declare class EndpointBatchItem extends SpeakeasyBase {
    address?: string;
    attributes?: Map<string, string[]>;
    channelType?: ChannelTypeEnum;
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
