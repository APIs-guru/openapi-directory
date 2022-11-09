import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Program
/** 
 * A seller program in to which a seller can opt-in.
**/
export class Program extends SpeakeasyBase {
  @Metadata({ data: "json, name=programType" })
  programType?: string;
}
