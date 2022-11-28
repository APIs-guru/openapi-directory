import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SingleCategoryStats
/** 
 * The statistics of a single CATEGORY value.
**/
export class SingleCategoryStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
