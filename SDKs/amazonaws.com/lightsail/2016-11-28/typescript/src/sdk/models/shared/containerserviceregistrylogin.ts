import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContainerServiceRegistryLogin
/** 
 * Describes the login information for the container image registry of an Amazon Lightsail account.
**/
export class ContainerServiceRegistryLogin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
