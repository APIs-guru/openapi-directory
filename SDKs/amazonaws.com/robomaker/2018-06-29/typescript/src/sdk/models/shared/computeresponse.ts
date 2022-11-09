import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComputeResponse
/** 
 * Compute information for the simulation job
**/
export class ComputeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=simulationUnitLimit" })
  simulationUnitLimit?: number;
}
