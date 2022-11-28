import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureValue } from "./featurevalue";
/**
 * Message containing the information about one cluster.
**/
export declare class Cluster extends SpeakeasyBase {
    centroidId?: string;
    count?: string;
    featureValues?: FeatureValue[];
}
