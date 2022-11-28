import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { Measurement } from "./measurement";
import { Metric } from "./metric";
import { Transform } from "./transform";



// PropertyType
/** 
 * Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
**/
export class PropertyType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=measurement" })
  measurement?: Measurement;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: Metric;

  @SpeakeasyMetadata({ data: "json, name=transform" })
  transform?: Transform;
}
