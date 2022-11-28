import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPair } from "./keypair";



export class GetKeyPairsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyPairs", elemType: KeyPair })
  keyPairs?: KeyPair[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
