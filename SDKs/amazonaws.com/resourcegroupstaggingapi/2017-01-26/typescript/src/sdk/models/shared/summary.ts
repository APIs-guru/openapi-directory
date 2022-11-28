import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetIdTypeEnum } from "./targetidtypeenum";



// Summary
/** 
 * A count of noncompliant resources.
**/
export class Summary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=NonCompliantResources" })
  nonCompliantResources?: number;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetIdType" })
  targetIdType?: TargetIdTypeEnum;
}
