import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainArn" })
  domainArn?: string;
}
