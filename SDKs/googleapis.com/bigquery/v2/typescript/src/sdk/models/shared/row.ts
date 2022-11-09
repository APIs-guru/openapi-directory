import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entry } from "./entry";


// Row
/** 
 * A single row in the confusion matrix.
**/
export class Row extends SpeakeasyBase {
  @Metadata({ data: "json, name=actualLabel" })
  actualLabel?: string;

  @Metadata({ data: "json, name=entries", elemType: shared.Entry })
  entries?: Entry[];
}
