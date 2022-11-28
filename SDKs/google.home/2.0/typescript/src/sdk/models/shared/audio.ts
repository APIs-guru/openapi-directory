import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Audio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digital" })
  digital: boolean;
}
