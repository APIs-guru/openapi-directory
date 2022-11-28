import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteReplicationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replicationJobId" })
  replicationJobId: string;
}
