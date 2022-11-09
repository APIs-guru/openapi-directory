import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Attribute } from "./attribute";
import { Measurement } from "./measurement";
import { Metric } from "./metric";
import { Transform } from "./transform";


// PropertyType
/** 
 * Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
**/
export class PropertyType extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: Attribute;

  @Metadata({ data: "json, name=measurement" })
  measurement?: Measurement;

  @Metadata({ data: "json, name=metric" })
  metric?: Metric;

  @Metadata({ data: "json, name=transform" })
  transform?: Transform;
}
