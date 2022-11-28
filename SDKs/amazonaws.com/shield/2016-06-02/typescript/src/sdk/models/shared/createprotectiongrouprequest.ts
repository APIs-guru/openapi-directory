import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroupAggregationEnum } from "./protectiongroupaggregationenum";
import { ProtectionGroupPatternEnum } from "./protectiongrouppatternenum";
import { ProtectedResourceTypeEnum } from "./protectedresourcetypeenum";
import { Tag } from "./tag";



export class CreateProtectionGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aggregation" })
  aggregation: ProtectionGroupAggregationEnum;

  @SpeakeasyMetadata({ data: "json, name=Members" })
  members?: string[];

  @SpeakeasyMetadata({ data: "json, name=Pattern" })
  pattern: ProtectionGroupPatternEnum;

  @SpeakeasyMetadata({ data: "json, name=ProtectionGroupId" })
  protectionGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: ProtectedResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
