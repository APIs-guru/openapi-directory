import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataHeader } from "./metadataheader";
import { MetadataRecord } from "./metadatarecord";



// Metadata
/** 
 * Type the defines the metadata information of the report. This includes the headers and the individual metadata records.
**/
export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadataHeader" })
  metadataHeader?: MetadataHeader;

  @SpeakeasyMetadata({ data: "json, name=metadataRecords", elemType: MetadataRecord })
  metadataRecords?: MetadataRecord[];
}
