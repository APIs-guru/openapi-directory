import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaginatedDeployKeys
/** 
 * A paginated list of deploy keys.
**/
export class PaginatedDeployKeys extends SpeakeasyBase {
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
