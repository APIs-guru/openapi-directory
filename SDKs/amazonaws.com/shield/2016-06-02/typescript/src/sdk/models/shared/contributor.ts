import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Contributor
/** 
 * A contributor to the attack and their contribution.
**/
export class Contributor extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
