import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RootCauseException } from "./rootcauseexception";



// ErrorRootCauseEntity
/** 
 * A collection of segments and corresponding subsegments associated to a trace summary error.
**/
export class ErrorRootCauseEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Exceptions", elemType: RootCauseException })
  exceptions?: RootCauseException[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Remote" })
  remote?: boolean;
}
