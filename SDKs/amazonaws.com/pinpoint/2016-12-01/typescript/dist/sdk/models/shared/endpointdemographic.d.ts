import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies demographic information about an endpoint, such as the applicable time zone and platform.
**/
export declare class EndpointDemographic extends SpeakeasyBase {
    appVersion?: string;
    locale?: string;
    make?: string;
    model?: string;
    modelVersion?: string;
    platform?: string;
    platformVersion?: string;
    timezone?: string;
}
