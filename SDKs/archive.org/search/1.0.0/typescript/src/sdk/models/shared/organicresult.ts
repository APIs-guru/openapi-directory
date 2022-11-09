import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrganicResult
/** 
 * The result of a organic search request
**/
export class OrganicResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=items" })
  items?: Map<string, any>[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}
