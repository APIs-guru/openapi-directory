import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HashClientIdRequest
/** 
 * JSON template for a hash Client Id request resource.
**/
export class HashClientIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
