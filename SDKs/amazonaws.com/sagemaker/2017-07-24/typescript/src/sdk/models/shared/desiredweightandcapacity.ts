import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DesiredWeightAndCapacity
/** 
 * Specifies weight and capacity values for a production variant.
**/
export class DesiredWeightAndCapacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DesiredInstanceCount" })
  desiredInstanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=DesiredWeight" })
  desiredWeight?: number;

  @SpeakeasyMetadata({ data: "json, name=VariantName" })
  variantName: string;
}
