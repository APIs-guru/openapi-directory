import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerServiceRegistryLogin } from "./containerserviceregistrylogin";


export class CreateContainerServiceRegistryLoginResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=registryLogin" })
  registryLogin?: ContainerServiceRegistryLogin;
}
