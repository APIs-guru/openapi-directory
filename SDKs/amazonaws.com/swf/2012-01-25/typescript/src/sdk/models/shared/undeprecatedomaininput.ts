import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UndeprecateDomainInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
