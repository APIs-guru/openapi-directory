import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Definition } from "./definition";


// MetadataHeader
/** 
 * Type that defines the metadata header fields.
**/
export class MetadataHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=metadataKeys", elemType: shared.Definition })
  metadataKeys?: Definition[];
}
