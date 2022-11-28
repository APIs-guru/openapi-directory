import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemValue
/** 
 * Describes a related item.
**/
export class ItemValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=metricDefinition" })
  metricDefinition?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
