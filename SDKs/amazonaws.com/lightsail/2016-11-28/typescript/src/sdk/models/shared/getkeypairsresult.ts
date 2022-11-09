import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyPair } from "./keypair";


export class GetKeyPairsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyPairs", elemType: shared.KeyPair })
  keyPairs?: KeyPair[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
