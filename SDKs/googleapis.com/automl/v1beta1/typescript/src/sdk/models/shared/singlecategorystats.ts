import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SingleCategoryStats
/** 
 * The statistics of a single CATEGORY value.
**/
export class SingleCategoryStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
