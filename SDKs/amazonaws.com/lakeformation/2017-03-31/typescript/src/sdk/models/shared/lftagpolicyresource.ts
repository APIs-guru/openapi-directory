import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LfTag } from "./lftag";
import { ResourceTypeEnum } from "./resourcetypeenum";



// LfTagPolicyResource
/** 
 * A structure containing a list of tag conditions that apply to a resource's tag policy.
**/
export class LfTagPolicyResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=Expression", elemType: LfTag })
  expression: LfTag[];

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: ResourceTypeEnum;
}
