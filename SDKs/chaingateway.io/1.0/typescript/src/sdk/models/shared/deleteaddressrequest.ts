import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
