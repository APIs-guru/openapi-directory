import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Publisher
/** 
 * Contains details of the listing publisher.
**/
export class Publisher extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primaryContact" })
  primaryContact?: string;
}
