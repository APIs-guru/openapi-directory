import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTagOptionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
