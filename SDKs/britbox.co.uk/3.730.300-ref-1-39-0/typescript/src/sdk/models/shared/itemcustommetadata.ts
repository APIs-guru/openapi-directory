import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemCustomMetadata
/** 
 * Custom metadata associated with an item.
**/
export class ItemCustomMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
