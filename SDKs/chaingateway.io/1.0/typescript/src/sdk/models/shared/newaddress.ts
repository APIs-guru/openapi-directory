import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ethereumaddress" })
  ethereumaddress: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
