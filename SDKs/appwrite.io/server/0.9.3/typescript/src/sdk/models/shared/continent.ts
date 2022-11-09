import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Continent
/** 
 * Continent
**/
export class Continent extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
