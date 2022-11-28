import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.
**/
export declare class EndpointSendConfiguration extends SpeakeasyBase {
    bodyOverride?: string;
    context?: Map<string, string>;
    rawContent?: string;
    substitutions?: Map<string, string[]>;
    titleOverride?: string;
}
