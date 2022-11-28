import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMessageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
