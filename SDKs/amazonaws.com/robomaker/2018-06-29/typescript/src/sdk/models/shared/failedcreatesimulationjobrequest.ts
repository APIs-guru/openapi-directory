import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimulationJobErrorCodeEnum } from "./simulationjoberrorcodeenum";
import { SimulationJobRequest } from "./simulationjobrequest";



// FailedCreateSimulationJobRequest
/** 
 * Information about a failed create simulation job request.
**/
export class FailedCreateSimulationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedAt" })
  failedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureCode" })
  failureCode?: SimulationJobErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: SimulationJobRequest;
}
