import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExportAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ethaddress" })
  ethaddress: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
