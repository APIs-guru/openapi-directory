import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId: string;
}
