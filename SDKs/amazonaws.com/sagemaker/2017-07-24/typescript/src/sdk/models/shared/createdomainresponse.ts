import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainArn" })
  domainArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
