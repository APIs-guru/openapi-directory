import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaginatedComponents
/** 
 * A paginated list of issue tracker components.
**/
export class PaginatedComponents extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pagelen" })
  pagelen?: number;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=values" })
  values?: Map<string, any>[];
}
