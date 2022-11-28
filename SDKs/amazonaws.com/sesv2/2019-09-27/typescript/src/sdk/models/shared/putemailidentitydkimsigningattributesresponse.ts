import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DkimStatusEnum } from "./dkimstatusenum";



// PutEmailIdentityDkimSigningAttributesResponse
/** 
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p>
**/
export class PutEmailIdentityDkimSigningAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DkimStatus" })
  dkimStatus?: DkimStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=DkimTokens" })
  dkimTokens?: string[];
}
