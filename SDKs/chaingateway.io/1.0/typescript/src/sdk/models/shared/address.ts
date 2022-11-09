import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;
}
