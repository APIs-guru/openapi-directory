import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VariantPropertyTypeEnum } from "./variantpropertytypeenum";


// VariantProperty
/** 
 * <p>Specifies a production variant property type for an Endpoint.</p> <p>If you are updating an endpoint with the <a>UpdateEndpointInput$RetainAllVariantProperties</a> option set to <code>true</code>, the <code>VariantProperty</code> objects listed in <a>UpdateEndpointInput$ExcludeRetainedVariantProperties</a> override the existing variant properties of the endpoint.</p>
**/
export class VariantProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=VariantPropertyType" })
  variantPropertyType: VariantPropertyTypeEnum;
}
