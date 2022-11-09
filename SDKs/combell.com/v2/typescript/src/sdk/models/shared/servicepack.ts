import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Servicepack
/** 
 * Servicepack information.
**/
export class Servicepack extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
