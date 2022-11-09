import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdditionalValidationAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
