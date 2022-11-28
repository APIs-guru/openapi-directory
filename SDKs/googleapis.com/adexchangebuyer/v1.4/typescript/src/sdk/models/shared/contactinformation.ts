import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContactInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
