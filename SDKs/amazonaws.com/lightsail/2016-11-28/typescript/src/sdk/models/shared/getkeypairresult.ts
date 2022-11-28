import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPair } from "./keypair";



export class GetKeyPairResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyPair" })
  keyPair?: KeyPair;
}
