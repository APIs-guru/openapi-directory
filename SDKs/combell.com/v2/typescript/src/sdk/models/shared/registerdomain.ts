import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistrantInput } from "./registrantinput";


export class RegisterDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain_name" })
  domainName?: string;

  @Metadata({ data: "json, name=name_servers" })
  nameServers?: string[];

  @Metadata({ data: "json, name=registrant" })
  registrant?: RegistrantInput;
}
