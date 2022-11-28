import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatetimeRange
/** 
 * Describes a time range, in ISO8601-UTC format.
**/
export class DatetimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Begin" })
  begin: string;

  @SpeakeasyMetadata({ data: "json, name=End" })
  end?: string;
}
