import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateContactResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactArn" })
  contactArn: string;
}
