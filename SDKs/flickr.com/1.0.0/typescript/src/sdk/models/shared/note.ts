import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Note extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;
}
