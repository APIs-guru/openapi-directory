import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelatedOpsItem
/** 
 * An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
**/
export class RelatedOpsItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=OpsItemId" })
  opsItemId: string;
}
