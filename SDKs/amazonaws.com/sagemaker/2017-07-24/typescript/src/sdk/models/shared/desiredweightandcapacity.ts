import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DesiredWeightAndCapacity
/** 
 * Specifies weight and capacity values for a production variant.
**/
export class DesiredWeightAndCapacity extends SpeakeasyBase {
  @Metadata({ data: "json, name=DesiredInstanceCount" })
  desiredInstanceCount?: number;

  @Metadata({ data: "json, name=DesiredWeight" })
  desiredWeight?: number;

  @Metadata({ data: "json, name=VariantName" })
  variantName: string;
}
