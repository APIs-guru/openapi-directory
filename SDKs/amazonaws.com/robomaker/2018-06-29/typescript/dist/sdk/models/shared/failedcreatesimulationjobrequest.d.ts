import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SimulationJobErrorCodeEnum } from "./simulationjoberrorcodeenum";
import { SimulationJobRequest } from "./simulationjobrequest";
/**
 * Information about a failed create simulation job request.
**/
export declare class FailedCreateSimulationJobRequest extends SpeakeasyBase {
    failedAt?: Date;
    failureCode?: SimulationJobErrorCodeEnum;
    failureReason?: string;
    request?: SimulationJobRequest;
}
