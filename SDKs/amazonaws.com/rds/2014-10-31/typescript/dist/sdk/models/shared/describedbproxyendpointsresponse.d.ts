import { SpeakeasyBase } from "../../../internal/utils";
import { DbProxyEndpoint } from "./dbproxyendpoint";
export declare class DescribeDbProxyEndpointsResponse extends SpeakeasyBase {
    dbProxyEndpoints?: DbProxyEndpoint[];
    marker?: string;
}
