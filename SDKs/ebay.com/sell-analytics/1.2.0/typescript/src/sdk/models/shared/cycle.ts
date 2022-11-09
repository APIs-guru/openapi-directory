import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Cycle
/** 
 * A complex type that describes a program cycle.
**/
export class Cycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=cycleType" })
  cycleType?: string;

  @Metadata({ data: "json, name=evaluationDate" })
  evaluationDate?: string;

  @Metadata({ data: "json, name=evaluationMonth" })
  evaluationMonth?: string;
}
