import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationSet } from "./replicationset";


export class GetReplicationSetOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=replicationSet" })
  replicationSet: ReplicationSet;
}
