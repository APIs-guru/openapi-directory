import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HashClientIdResponse
/** 
 * JSON template for a hash Client Id response resource.
**/
export class HashClientIdResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=hashedClientId" })
  hashedClientId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
