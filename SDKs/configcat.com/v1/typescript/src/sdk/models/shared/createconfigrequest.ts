import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
