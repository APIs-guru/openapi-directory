import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaginatedLogEntries
/** 
 * A paginated list of issue changes.
**/
export class PaginatedLogEntries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pagelen" })
  pagelen?: number;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: Map<string, any>[];
}
