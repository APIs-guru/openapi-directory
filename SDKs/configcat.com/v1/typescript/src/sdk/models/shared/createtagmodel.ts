import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTagModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
