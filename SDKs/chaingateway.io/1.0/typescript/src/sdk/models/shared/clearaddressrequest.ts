import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClearAddressRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @Metadata({ data: "json, name=newaddress" })
  newaddress: string;

  @Metadata({ data: "json, name=password" })
  password: string;
}
