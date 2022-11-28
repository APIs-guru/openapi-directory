import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComputeResponse
/** 
 * Compute information for the simulation job
**/
export class ComputeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=simulationUnitLimit" })
  simulationUnitLimit?: number;
}
