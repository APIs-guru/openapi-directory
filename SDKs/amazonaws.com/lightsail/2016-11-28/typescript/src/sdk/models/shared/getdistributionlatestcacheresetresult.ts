import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDistributionLatestCacheResetResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
