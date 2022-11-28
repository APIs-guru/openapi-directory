import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Definition } from "./definition";



// MetadataHeader
/** 
 * Type that defines the metadata header fields.
**/
export class MetadataHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=metadataKeys", elemType: Definition })
  metadataKeys?: Definition[];
}
