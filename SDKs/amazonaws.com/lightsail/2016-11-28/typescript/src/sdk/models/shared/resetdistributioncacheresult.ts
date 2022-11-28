import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



export class ResetDistributionCacheResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
