import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Metadata
/** 
 * Describes key/value pairs.
**/
export class Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
