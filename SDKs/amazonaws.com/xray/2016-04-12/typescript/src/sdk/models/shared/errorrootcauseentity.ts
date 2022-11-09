import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RootCauseException } from "./rootcauseexception";


// ErrorRootCauseEntity
/** 
 * A collection of segments and corresponding subsegments associated to a trace summary error.
**/
export class ErrorRootCauseEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Exceptions", elemType: shared.RootCauseException })
  exceptions?: RootCauseException[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Remote" })
  remote?: boolean;
}
