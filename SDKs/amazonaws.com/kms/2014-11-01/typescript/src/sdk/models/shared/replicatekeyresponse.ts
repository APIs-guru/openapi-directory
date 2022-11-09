import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyMetadata } from "./keymetadata";
import { Tag } from "./tag";


export class ReplicateKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicaKeyMetadata" })
  replicaKeyMetadata?: KeyMetadata;

  @Metadata({ data: "json, name=ReplicaPolicy" })
  replicaPolicy?: string;

  @Metadata({ data: "json, name=ReplicaTags", elemType: shared.Tag })
  replicaTags?: Tag[];
}
