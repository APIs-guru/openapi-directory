import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProtectionGroupAggregationEnum } from "./protectiongroupaggregationenum";
import { ProtectionGroupPatternEnum } from "./protectiongrouppatternenum";
import { ProtectedResourceTypeEnum } from "./protectedresourcetypeenum";
import { Tag } from "./tag";


export class CreateProtectionGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aggregation" })
  aggregation: ProtectionGroupAggregationEnum;

  @Metadata({ data: "json, name=Members" })
  members?: string[];

  @Metadata({ data: "json, name=Pattern" })
  pattern: ProtectionGroupPatternEnum;

  @Metadata({ data: "json, name=ProtectionGroupId" })
  protectionGroupId: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ProtectedResourceTypeEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
