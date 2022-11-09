import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainArn" })
  domainArn?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
