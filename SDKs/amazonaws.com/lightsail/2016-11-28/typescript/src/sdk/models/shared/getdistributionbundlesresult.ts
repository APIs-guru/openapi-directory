import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionBundle } from "./distributionbundle";



export class GetDistributionBundlesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundles", elemType: DistributionBundle })
  bundles?: DistributionBundle[];
}
