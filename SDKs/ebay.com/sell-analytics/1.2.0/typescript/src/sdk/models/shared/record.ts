import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";
import { Value } from "./value";


// Record
/** 
 * Type that defines the fields of the individual record of the report.
**/
export class Record extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionValues", elemType: shared.Value })
  dimensionValues?: Value[];

  @Metadata({ data: "json, name=metricValues", elemType: shared.Value })
  metricValues?: Value[];
}
