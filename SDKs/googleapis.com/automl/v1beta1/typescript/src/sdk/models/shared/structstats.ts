import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataStats } from "./datastats";


// StructStats
/** 
 * The data statistics of a series of STRUCT values.
**/
export class StructStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldStats", elemType: shared.DataStats })
  fieldStats?: Map<string, DataStats>;
}
