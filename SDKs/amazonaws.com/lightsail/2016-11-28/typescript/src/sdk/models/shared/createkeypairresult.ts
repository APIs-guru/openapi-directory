import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyPair } from "./keypair";
import { Operation } from "./operation";


export class CreateKeyPairResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyPair" })
  keyPair?: KeyPair;

  @Metadata({ data: "json, name=operation" })
  operation?: Operation;

  @Metadata({ data: "json, name=privateKeyBase64" })
  privateKeyBase64?: string;

  @Metadata({ data: "json, name=publicKeyBase64" })
  publicKeyBase64?: string;
}
