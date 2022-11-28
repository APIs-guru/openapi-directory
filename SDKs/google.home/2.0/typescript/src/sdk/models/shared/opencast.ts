import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Opencast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pin_code" })
  pinCode: string;
}
