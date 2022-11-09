import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EditNameServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain_name" })
  domainName?: string;

  @Metadata({ data: "json, name=name_servers" })
  nameServers?: string[];
}
