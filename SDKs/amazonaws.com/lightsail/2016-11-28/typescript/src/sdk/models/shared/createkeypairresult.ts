import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPair } from "./keypair";
import { Operation } from "./operation";



export class CreateKeyPairResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyPair" })
  keyPair?: KeyPair;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;

  @SpeakeasyMetadata({ data: "json, name=privateKeyBase64" })
  privateKeyBase64?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKeyBase64" })
  publicKeyBase64?: string;
}
