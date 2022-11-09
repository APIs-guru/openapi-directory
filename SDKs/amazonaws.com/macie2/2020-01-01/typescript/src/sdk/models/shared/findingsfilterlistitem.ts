import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FindingsFilterActionEnum } from "./findingsfilteractionenum";


// FindingsFilterListItem
/** 
 * Provides information about a findings filter.
**/
export class FindingsFilterListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: FindingsFilterActionEnum;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
