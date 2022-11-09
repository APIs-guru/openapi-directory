import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContainerServiceRegistryLogin
/** 
 * Describes the login information for the container image registry of an Amazon Lightsail account.
**/
export class ContainerServiceRegistryLogin extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=registry" })
  registry?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
