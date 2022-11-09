import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateLogResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;
}
