import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeActionEnum } from "./changeactionenum";
import { ResourceChangeDetail } from "./resourcechangedetail";
import { ReplacementEnum } from "./replacementenum";
import { ResourceAttributeEnum } from "./resourceattributeenum";



// ResourceChange
/** 
 * Information about a resource change that will occur when a plan is executed.
**/
export class ResourceChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: ChangeActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Details", elemType: ResourceChangeDetail })
  details?: ResourceChangeDetail[];

  @SpeakeasyMetadata({ data: "json, name=LogicalResourceId" })
  logicalResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=PhysicalResourceId" })
  physicalResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Replacement" })
  replacement?: ReplacementEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=Scope" })
  scope?: ResourceAttributeEnum[];
}
