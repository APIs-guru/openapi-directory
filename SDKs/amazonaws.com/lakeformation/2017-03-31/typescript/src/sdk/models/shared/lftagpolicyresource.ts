import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LfTag } from "./lftag";
import { ResourceTypeEnum } from "./resourcetypeenum";


// LfTagPolicyResource
/** 
 * A structure containing a list of tag conditions that apply to a resource's tag policy.
**/
export class LfTagPolicyResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=Expression", elemType: shared.LfTag })
  expression: LfTag[];

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: ResourceTypeEnum;
}
