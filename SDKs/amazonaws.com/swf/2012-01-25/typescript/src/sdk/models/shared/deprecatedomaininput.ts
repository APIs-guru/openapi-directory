import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeprecateDomainInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
