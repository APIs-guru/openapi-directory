import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cipherparams } from "./cipherparams";
import { Kdfparams } from "./kdfparams";


export class Crypto extends SpeakeasyBase {
  @Metadata({ data: "json, name=cipher" })
  cipher: string;

  @Metadata({ data: "json, name=cipherparams" })
  cipherparams: Cipherparams;

  @Metadata({ data: "json, name=ciphertext" })
  ciphertext: string;

  @Metadata({ data: "json, name=kdf" })
  kdf: string;

  @Metadata({ data: "json, name=kdfparams" })
  kdfparams: Kdfparams;

  @Metadata({ data: "json, name=mac" })
  mac: string;
}
