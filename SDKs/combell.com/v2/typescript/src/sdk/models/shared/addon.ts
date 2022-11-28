import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Addon
/** 
 * Addon information
**/
export class Addon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
