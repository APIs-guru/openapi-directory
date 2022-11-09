import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// ManagedResourceSummary
/** 
 * Summary information about a managed resource.
**/
export class ManagedResourceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationCount" })
  associationCount?: number;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
