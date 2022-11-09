import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterConfiguration } from "./clusterconfiguration";


// Snapshot
/** 
 * Represents a copy of an entire cluster as of the time when the snapshot was taken.
**/
export class Snapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=ClusterConfiguration" })
  clusterConfiguration?: ClusterConfiguration;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Source" })
  source?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
