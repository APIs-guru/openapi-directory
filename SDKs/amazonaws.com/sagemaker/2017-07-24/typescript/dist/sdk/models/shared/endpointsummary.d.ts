import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";
/**
 * Provides summary information for an endpoint.
**/
export declare class EndpointSummary extends SpeakeasyBase {
    creationTime: Date;
    endpointArn: string;
    endpointName: string;
    endpointStatus: EndpointStatusEnum;
    lastModifiedTime: Date;
}
