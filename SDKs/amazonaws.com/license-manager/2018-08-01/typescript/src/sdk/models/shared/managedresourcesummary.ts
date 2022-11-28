import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// ManagedResourceSummary
/** 
 * Summary information about a managed resource.
**/
export class ManagedResourceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationCount" })
  associationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
