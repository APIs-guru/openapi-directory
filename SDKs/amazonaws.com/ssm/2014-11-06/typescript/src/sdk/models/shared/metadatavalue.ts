import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetadataValue
/** 
 * Metadata to assign to an Application Manager application.
**/
export class MetadataValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
