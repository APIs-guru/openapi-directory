import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeprecateDomainInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
