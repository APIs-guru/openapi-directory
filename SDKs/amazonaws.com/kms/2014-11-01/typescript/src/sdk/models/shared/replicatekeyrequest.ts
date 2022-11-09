import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class ReplicateKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BypassPolicyLockoutSafetyCheck" })
  bypassPolicyLockoutSafetyCheck?: boolean;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=Policy" })
  policy?: string;

  @Metadata({ data: "json, name=ReplicaRegion" })
  replicaRegion: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
