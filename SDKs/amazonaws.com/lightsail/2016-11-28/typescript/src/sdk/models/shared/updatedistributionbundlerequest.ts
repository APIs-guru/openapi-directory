import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDistributionBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=distributionName" })
  distributionName?: string;
}
