import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LfTag
/** 
 * A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns not tagged 'PII' of tables tagged 'Prod'.
**/
export class LfTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=TagKey" })
  tagKey: string;

  @Metadata({ data: "json, name=TagValues" })
  tagValues: string[];
}
