import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaginatedEnvironments
/** 
 * A paged list of environments
**/
export class PaginatedEnvironments extends SpeakeasyBase {
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
