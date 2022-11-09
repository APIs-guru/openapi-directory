import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Function } from "./function";


// FunctionList
/** 
 * Functions List
**/
export class FunctionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=functions", elemType: shared.Function })
  functions: Function[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
