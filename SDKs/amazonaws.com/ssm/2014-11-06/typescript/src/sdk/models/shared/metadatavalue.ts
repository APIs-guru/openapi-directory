import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetadataValue
/** 
 * Metadata to assign to an Application Manager application.
**/
export class MetadataValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Value" })
  value?: string;
}
