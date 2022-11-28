import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceId } from "./serviceid";



// AnomalousService
/** 
 * The service within the service graph that has anomalously high fault rates. 
**/
export class AnomalousService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceId" })
  serviceId?: ServiceId;
}
