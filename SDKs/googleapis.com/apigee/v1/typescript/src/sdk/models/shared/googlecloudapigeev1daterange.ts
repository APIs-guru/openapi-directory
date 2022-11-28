import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1DateRange
/** 
 * Date range of the data to export.
**/
export class GoogleCloudApigeeV1DateRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}
