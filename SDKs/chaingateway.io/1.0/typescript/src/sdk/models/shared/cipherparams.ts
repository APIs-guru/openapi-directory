import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Cipherparams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iv" })
  iv: string;
}
