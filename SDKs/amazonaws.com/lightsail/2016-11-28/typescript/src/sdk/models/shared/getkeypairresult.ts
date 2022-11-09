import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyPair } from "./keypair";


export class GetKeyPairResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyPair" })
  keyPair?: KeyPair;
}
