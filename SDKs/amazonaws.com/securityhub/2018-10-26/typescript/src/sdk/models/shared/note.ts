import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Note
/** 
 * A user-defined note added to a finding.
**/
export class Note extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedBy" })
  updatedBy: string;
}
