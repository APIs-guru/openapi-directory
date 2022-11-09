import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DkimStatusEnum } from "./dkimstatusenum";


// PutEmailIdentityDkimSigningAttributesResponse
/** 
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p>
**/
export class PutEmailIdentityDkimSigningAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DkimStatus" })
  dkimStatus?: DkimStatusEnum;

  @Metadata({ data: "json, name=DkimTokens" })
  dkimTokens?: string[];
}
