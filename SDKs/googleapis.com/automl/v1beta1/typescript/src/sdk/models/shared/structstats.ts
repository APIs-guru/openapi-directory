import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataStats } from "./datastats";



// StructStats
/** 
 * The data statistics of a series of STRUCT values.
**/
export class StructStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldStats", elemType: DataStats })
  fieldStats?: Map<string, DataStats>;
}
