import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LfTag
/** 
 * A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns not tagged 'PII' of tables tagged 'Prod'.
**/
export class LfTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TagKey" })
  tagKey: string;

  @SpeakeasyMetadata({ data: "json, name=TagValues" })
  tagValues: string[];
}
