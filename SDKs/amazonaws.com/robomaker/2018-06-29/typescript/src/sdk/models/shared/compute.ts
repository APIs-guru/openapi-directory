import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Compute
/** 
 * Compute information for the simulation job.
**/
export class Compute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=simulationUnitLimit" })
  simulationUnitLimit?: number;
}
