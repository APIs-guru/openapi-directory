import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaRegionType } from "./replicaregiontype";
import { Tag } from "./tag";


export class CreateSecretRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddReplicaRegions", elemType: shared.ReplicaRegionType })
  addReplicaRegions?: ReplicaRegionType[];

  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ForceOverwriteReplicaSecret" })
  forceOverwriteReplicaSecret?: boolean;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SecretBinary" })
  secretBinary?: string;

  @Metadata({ data: "json, name=SecretString" })
  secretString?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
