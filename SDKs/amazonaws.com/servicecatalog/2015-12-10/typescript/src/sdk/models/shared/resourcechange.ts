import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChangeActionEnum } from "./changeactionenum";
import { ResourceChangeDetail } from "./resourcechangedetail";
import { ReplacementEnum } from "./replacementenum";
import { ResourceAttributeEnum } from "./resourceattributeenum";


// ResourceChange
/** 
 * Information about a resource change that will occur when a plan is executed.
**/
export class ResourceChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: ChangeActionEnum;

  @Metadata({ data: "json, name=Details", elemType: shared.ResourceChangeDetail })
  details?: ResourceChangeDetail[];

  @Metadata({ data: "json, name=LogicalResourceId" })
  logicalResourceId?: string;

  @Metadata({ data: "json, name=PhysicalResourceId" })
  physicalResourceId?: string;

  @Metadata({ data: "json, name=Replacement" })
  replacement?: ReplacementEnum;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=Scope" })
  scope?: ResourceAttributeEnum[];
}
