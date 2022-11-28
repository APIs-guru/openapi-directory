import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DistributionBundle
/** 
 * Describes the specifications of a distribution bundle.
**/
export class DistributionBundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=transferPerMonthInGb" })
  transferPerMonthInGb?: number;
}
