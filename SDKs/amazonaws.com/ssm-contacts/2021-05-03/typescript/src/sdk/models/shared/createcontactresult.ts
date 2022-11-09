import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateContactResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactArn" })
  contactArn: string;
}
