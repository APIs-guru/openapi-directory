import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Compute
/** 
 * Compute information for the simulation job.
**/
export class Compute extends SpeakeasyBase {
  @Metadata({ data: "json, name=simulationUnitLimit" })
  simulationUnitLimit?: number;
}
