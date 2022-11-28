import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class ReplicateKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BypassPolicyLockoutSafetyCheck" })
  bypassPolicyLockoutSafetyCheck?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaRegion" })
  replicaRegion: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
