import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfiguration } from "./clusterconfiguration";



// Snapshot
/** 
 * Represents a copy of an entire cluster as of the time when the snapshot was taken.
**/
export class Snapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterConfiguration" })
  clusterConfiguration?: ClusterConfiguration;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
