import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemValue
/** 
 * Describes a related item.
**/
export class ItemValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=metricDefinition" })
  metricDefinition?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
