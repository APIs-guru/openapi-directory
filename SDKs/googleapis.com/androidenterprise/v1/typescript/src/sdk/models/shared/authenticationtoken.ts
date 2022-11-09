import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthenticationToken
/** 
 * An AuthenticationToken is used by the EMM's device policy client on a device to provision the given EMM-managed user on that device.
**/
export class AuthenticationToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token?: string;
}
