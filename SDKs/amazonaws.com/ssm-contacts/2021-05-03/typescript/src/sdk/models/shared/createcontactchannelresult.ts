import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateContactChannelResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactChannelArn" })
  contactChannelArn: string;
}
