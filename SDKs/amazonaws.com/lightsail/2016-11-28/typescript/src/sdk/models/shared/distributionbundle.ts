import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DistributionBundle
/** 
 * Describes the specifications of a distribution bundle.
**/
export class DistributionBundle extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=transferPerMonthInGb" })
  transferPerMonthInGb?: number;
}
