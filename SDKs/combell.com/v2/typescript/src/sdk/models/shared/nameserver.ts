import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NameServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
