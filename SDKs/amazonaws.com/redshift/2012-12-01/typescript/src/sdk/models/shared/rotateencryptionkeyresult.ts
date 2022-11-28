import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class RotateEncryptionKeyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
