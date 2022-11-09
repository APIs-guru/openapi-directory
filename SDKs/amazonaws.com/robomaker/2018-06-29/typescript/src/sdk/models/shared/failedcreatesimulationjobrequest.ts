import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimulationJobErrorCodeEnum } from "./simulationjoberrorcodeenum";
import { SimulationJobRequest } from "./simulationjobrequest";


// FailedCreateSimulationJobRequest
/** 
 * Information about a failed create simulation job request.
**/
export class FailedCreateSimulationJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedAt" })
  failedAt?: Date;

  @Metadata({ data: "json, name=failureCode" })
  failureCode?: SimulationJobErrorCodeEnum;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=request" })
  request?: SimulationJobRequest;
}
