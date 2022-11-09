import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DistributionBundle } from "./distributionbundle";


export class GetDistributionBundlesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundles", elemType: shared.DistributionBundle })
  bundles?: DistributionBundle[];
}
