import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Function } from "./function";



// FunctionList
/** 
 * Functions List
**/
export class FunctionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functions", elemType: Function })
  functions: Function[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
