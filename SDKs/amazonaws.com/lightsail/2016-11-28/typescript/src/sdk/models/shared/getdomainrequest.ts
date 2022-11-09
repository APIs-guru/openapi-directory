import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName: string;
}
