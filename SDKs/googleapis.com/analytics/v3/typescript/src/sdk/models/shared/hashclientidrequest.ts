import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HashClientIdRequest
/** 
 * JSON template for a hash Client Id request resource.
**/
export class HashClientIdRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
