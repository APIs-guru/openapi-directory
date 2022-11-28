import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Continent
/** 
 * Continent
**/
export class Continent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
