import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Servicepack
/** 
 * Servicepack information.
**/
export class Servicepack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
