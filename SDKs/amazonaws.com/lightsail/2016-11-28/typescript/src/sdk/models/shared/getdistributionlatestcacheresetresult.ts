import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDistributionLatestCacheResetResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
