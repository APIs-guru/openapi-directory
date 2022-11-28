import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResetDistributionCacheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributionName" })
  distributionName?: string;
}
