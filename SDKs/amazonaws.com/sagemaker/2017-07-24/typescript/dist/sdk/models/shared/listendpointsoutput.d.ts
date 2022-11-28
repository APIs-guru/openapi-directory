import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointSummary } from "./endpointsummary";
export declare class ListEndpointsOutput extends SpeakeasyBase {
    endpoints: EndpointSummary[];
    nextToken?: string;
}
