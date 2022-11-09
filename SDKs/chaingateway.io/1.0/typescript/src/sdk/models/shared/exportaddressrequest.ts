import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExportAddressRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ethaddress" })
  ethaddress: string;

  @Metadata({ data: "json, name=password" })
  password: string;
}
