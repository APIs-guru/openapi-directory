import { SpeakeasyBase } from "../../../internal/utils";
import { EcsCluster } from "./ecscluster";
/**
 * Contains the response to a <code>DescribeEcsClusters</code> request.
**/
export declare class DescribeEcsClustersResult extends SpeakeasyBase {
    ecsClusters?: EcsCluster[];
    nextToken?: string;
}
