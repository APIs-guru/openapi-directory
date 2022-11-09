import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";


export class ResetDistributionCacheResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=operation" })
  operation?: Operation;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
