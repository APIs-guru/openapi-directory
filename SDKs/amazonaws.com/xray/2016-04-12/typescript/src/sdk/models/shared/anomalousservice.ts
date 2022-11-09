import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceId } from "./serviceid";


// AnomalousService
/** 
 * The service within the service graph that has anomalously high fault rates. 
**/
export class AnomalousService extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceId" })
  serviceId?: ServiceId;
}
