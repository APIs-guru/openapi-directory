import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QosPolicy
/** 
 * QOS policy parameters.
**/
export class QosPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthGbps" })
  bandwidthGbps?: number;
}
