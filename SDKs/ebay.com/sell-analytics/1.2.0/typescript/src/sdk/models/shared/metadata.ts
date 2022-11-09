import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataHeader } from "./metadataheader";
import { MetadataRecord } from "./metadatarecord";


// Metadata
/** 
 * Type the defines the metadata information of the report. This includes the headers and the individual metadata records.
**/
export class Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadataHeader" })
  metadataHeader?: MetadataHeader;

  @Metadata({ data: "json, name=metadataRecords", elemType: shared.MetadataRecord })
  metadataRecords?: MetadataRecord[];
}
