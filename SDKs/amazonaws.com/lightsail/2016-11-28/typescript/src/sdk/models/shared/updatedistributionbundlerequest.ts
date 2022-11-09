import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDistributionBundleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=distributionName" })
  distributionName?: string;
}
