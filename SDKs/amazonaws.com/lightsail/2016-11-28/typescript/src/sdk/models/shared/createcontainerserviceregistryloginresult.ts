import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceRegistryLogin } from "./containerserviceregistrylogin";



export class CreateContainerServiceRegistryLoginResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registryLogin" })
  registryLogin?: ContainerServiceRegistryLogin;
}
