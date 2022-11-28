import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HashClientIdResponse
/** 
 * JSON template for a hash Client Id response resource.
**/
export class HashClientIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=hashedClientId" })
  hashedClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
