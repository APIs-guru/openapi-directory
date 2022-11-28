import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureValue } from "./featurevalue";



// Cluster
/** 
 * Message containing the information about one cluster.
**/
export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=centroidId" })
  centroidId?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=featureValues", elemType: FeatureValue })
  featureValues?: FeatureValue[];
}
