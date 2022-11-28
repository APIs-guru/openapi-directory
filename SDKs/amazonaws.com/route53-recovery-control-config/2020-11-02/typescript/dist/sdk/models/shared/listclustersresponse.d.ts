import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
export declare class ListClustersResponse extends SpeakeasyBase {
    clusters?: Cluster[];
    nextToken?: string;
}
