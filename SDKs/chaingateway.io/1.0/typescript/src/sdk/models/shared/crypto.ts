import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cipherparams } from "./cipherparams";
import { Kdfparams } from "./kdfparams";



export class Crypto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cipher" })
  cipher: string;

  @SpeakeasyMetadata({ data: "json, name=cipherparams" })
  cipherparams: Cipherparams;

  @SpeakeasyMetadata({ data: "json, name=ciphertext" })
  ciphertext: string;

  @SpeakeasyMetadata({ data: "json, name=kdf" })
  kdf: string;

  @SpeakeasyMetadata({ data: "json, name=kdfparams" })
  kdfparams: Kdfparams;

  @SpeakeasyMetadata({ data: "json, name=mac" })
  mac: string;
}
