import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdministratorWebToken
/** 
 * A token authorizing an admin to access an iframe.
**/
export class AdministratorWebToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
