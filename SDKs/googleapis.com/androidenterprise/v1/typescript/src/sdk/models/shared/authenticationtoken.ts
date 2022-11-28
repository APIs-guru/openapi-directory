import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthenticationToken
/** 
 * An AuthenticationToken is used by the EMM's device policy client on a device to provision the given EMM-managed user on that device.
**/
export class AuthenticationToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
