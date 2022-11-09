import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddSubsiteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain_name" })
  domainName?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
