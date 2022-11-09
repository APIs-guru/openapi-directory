import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UndeprecateDomainInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
