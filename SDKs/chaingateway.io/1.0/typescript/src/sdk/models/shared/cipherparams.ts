import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Cipherparams extends SpeakeasyBase {
  @Metadata({ data: "json, name=iv" })
  iv: string;
}
