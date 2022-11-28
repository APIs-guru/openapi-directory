import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDomainInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
