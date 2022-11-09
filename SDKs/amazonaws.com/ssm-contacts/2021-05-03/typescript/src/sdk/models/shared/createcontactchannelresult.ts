import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateContactChannelResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactChannelArn" })
  contactChannelArn: string;
}
