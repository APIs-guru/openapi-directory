import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatetimeRange
/** 
 * Describes a time range, in ISO8601-UTC format.
**/
export class DatetimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=Begin" })
  begin: string;

  @Metadata({ data: "json, name=End" })
  end?: string;
}
