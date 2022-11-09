import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FeatureValue } from "./featurevalue";


// Cluster
/** 
 * Message containing the information about one cluster.
**/
export class Cluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=centroidId" })
  centroidId?: string;

  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=featureValues", elemType: shared.FeatureValue })
  featureValues?: FeatureValue[];
}
