import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OpsMetadataFilter
/** 
 * A filter to limit the number of OpsMetadata objects displayed.
**/
export class OpsMetadataFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
