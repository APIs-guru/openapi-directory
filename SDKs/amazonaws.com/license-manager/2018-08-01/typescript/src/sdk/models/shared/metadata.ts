import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Metadata
/** 
 * Describes key/value pairs.
**/
export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
