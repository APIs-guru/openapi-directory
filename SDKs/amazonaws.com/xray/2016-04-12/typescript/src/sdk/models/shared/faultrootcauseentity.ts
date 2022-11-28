import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RootCauseException } from "./rootcauseexception";



// FaultRootCauseEntity
/** 
 * A collection of segments and corresponding subsegments associated to a trace summary fault error.
**/
export class FaultRootCauseEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Exceptions", elemType: RootCauseException })
  exceptions?: RootCauseException[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Remote" })
  remote?: boolean;
}
