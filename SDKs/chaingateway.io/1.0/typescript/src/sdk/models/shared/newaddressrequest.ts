import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
