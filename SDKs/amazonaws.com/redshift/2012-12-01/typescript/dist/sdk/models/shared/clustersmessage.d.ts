import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
/**
 * Contains the output from the <a>DescribeClusters</a> action.
**/
export declare class ClustersMessage extends SpeakeasyBase {
    clusters?: Cluster[];
    marker?: string;
}
