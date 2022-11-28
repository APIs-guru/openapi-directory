import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Proxy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode: string;
}
