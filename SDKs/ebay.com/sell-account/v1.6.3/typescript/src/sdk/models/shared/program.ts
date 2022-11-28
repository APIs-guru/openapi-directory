import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Program
/** 
 * A seller program in to which a seller can opt-in.
**/
export class Program extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=programType" })
  programType?: string;
}
