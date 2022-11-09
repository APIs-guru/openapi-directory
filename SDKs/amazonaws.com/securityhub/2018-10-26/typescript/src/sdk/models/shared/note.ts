import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Note
/** 
 * A user-defined note added to a finding.
**/
export class Note extends SpeakeasyBase {
  @Metadata({ data: "json, name=Text" })
  text: string;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt: string;

  @Metadata({ data: "json, name=UpdatedBy" })
  updatedBy: string;
}
