import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainArn" })
  domainArn?: string;
}
