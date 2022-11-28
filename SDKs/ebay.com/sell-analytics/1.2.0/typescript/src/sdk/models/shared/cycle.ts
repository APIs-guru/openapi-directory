import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Cycle
/** 
 * A complex type that describes a program cycle.
**/
export class Cycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cycleType" })
  cycleType?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationDate" })
  evaluationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationMonth" })
  evaluationMonth?: string;
}
