import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointConfigSummary } from "./endpointconfigsummary";
export declare class ListEndpointConfigsOutput extends SpeakeasyBase {
    endpointConfigs: EndpointConfigSummary[];
    nextToken?: string;
}
