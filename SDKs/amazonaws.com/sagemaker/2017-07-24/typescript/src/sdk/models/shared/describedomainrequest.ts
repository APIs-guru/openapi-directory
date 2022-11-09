import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainId" })
  domainId: string;
}
