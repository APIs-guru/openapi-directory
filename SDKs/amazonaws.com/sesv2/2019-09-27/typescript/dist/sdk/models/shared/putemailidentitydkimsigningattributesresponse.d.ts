import { SpeakeasyBase } from "../../../internal/utils";
import { DkimStatusEnum } from "./dkimstatusenum";
/**
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p>
**/
export declare class PutEmailIdentityDkimSigningAttributesResponse extends SpeakeasyBase {
    dkimStatus?: DkimStatusEnum;
    dkimTokens?: string[];
}
