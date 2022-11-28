import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EditNameServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain_name" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=name_servers" })
  nameServers?: string[];
}
