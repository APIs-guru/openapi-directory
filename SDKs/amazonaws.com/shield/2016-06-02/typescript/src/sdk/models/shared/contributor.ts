import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Contributor
/** 
 * A contributor to the attack and their contribution.
**/
export class Contributor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
