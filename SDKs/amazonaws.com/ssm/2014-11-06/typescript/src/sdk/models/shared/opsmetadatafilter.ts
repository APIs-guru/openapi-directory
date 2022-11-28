import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpsMetadataFilter
/** 
 * A filter to limit the number of OpsMetadata objects displayed.
**/
export class OpsMetadataFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
