import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyMetadata } from "./keymetadata";
import { Tag } from "./tag";



export class ReplicateKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicaKeyMetadata" })
  replicaKeyMetadata?: KeyMetadata;

  @SpeakeasyMetadata({ data: "json, name=ReplicaPolicy" })
  replicaPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaTags", elemType: Tag })
  replicaTags?: Tag[];
}
