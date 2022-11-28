import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaRegionType } from "./replicaregiontype";
import { Tag } from "./tag";



export class CreateSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddReplicaRegions", elemType: ReplicaRegionType })
  addReplicaRegions?: ReplicaRegionType[];

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ForceOverwriteReplicaSecret" })
  forceOverwriteReplicaSecret?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SecretBinary" })
  secretBinary?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretString" })
  secretString?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
