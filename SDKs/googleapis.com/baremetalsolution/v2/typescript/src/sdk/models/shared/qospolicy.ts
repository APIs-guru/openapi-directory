import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QosPolicy
/** 
 * QOS policy parameters.
**/
export class QosPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidthGbps" })
  bandwidthGbps?: number;
}
