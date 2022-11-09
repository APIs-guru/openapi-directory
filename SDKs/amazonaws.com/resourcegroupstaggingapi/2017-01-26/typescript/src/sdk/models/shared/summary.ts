import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetIdTypeEnum } from "./targetidtypeenum";


// Summary
/** 
 * A count of noncompliant resources.
**/
export class Summary extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated?: string;

  @Metadata({ data: "json, name=NonCompliantResources" })
  nonCompliantResources?: number;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=TargetId" })
  targetId?: string;

  @Metadata({ data: "json, name=TargetIdType" })
  targetIdType?: TargetIdTypeEnum;
}
