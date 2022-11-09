import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1DateRange
/** 
 * Date range of the data to export.
**/
export class GoogleCloudApigeeV1DateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;
}
