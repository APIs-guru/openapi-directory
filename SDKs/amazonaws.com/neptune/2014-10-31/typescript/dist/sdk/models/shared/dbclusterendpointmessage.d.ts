import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterEndpoint } from "./dbclusterendpoint";
export declare class DbClusterEndpointMessage extends SpeakeasyBase {
    dbClusterEndpoints?: DbClusterEndpoint[];
    marker?: string;
}
