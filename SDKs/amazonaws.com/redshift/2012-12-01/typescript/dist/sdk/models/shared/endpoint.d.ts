import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpoint } from "./vpcendpoint";
/**
 * Describes a connection endpoint.
**/
export declare class Endpoint extends SpeakeasyBase {
    address?: string;
    port?: number;
    vpcEndpoints?: VpcEndpoint[];
}
