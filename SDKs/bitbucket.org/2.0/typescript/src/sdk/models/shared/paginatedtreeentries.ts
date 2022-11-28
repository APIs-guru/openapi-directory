import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaginatedTreeentries
/** 
 * A paginated list of commit_file and/or commit_directory objects.
**/
export class PaginatedTreeentries extends SpeakeasyBase {
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
