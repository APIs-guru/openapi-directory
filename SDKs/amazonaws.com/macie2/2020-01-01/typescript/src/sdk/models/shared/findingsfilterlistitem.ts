import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingsFilterActionEnum } from "./findingsfilteractionenum";



// FindingsFilterListItem
/** 
 * Provides information about a findings filter.
**/
export class FindingsFilterListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: FindingsFilterActionEnum;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
