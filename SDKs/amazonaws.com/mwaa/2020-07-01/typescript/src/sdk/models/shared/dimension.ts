import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dimension
/** 
 * Internal only API.
**/
export class Dimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
