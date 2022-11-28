import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDistributionLatestCacheResetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributionName" })
  distributionName?: string;
}
