import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistrantInput } from "./registrantinput";



export class RegisterDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain_name" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=name_servers" })
  nameServers?: string[];

  @SpeakeasyMetadata({ data: "json, name=registrant" })
  registrant?: RegistrantInput;
}
