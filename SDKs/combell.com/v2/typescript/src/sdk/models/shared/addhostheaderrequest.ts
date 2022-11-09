import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddHostHeaderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain_name" })
  domainName?: string;
}
