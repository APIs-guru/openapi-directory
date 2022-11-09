import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdministratorWebToken
/** 
 * A token authorizing an admin to access an iframe.
**/
export class AdministratorWebToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token?: string;
}
