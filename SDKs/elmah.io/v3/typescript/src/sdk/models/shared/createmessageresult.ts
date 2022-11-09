import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateMessageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;
}
