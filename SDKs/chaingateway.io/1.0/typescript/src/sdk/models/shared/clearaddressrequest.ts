import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClearAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @SpeakeasyMetadata({ data: "json, name=newaddress" })
  newaddress: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
