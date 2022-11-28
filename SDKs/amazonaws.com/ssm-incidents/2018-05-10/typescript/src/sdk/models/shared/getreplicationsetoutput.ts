import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationSet } from "./replicationset";



export class GetReplicationSetOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replicationSet" })
  replicationSet: ReplicationSet;
}
