import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Addon
/** 
 * Addon information
**/
export class Addon extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
