import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateReplicationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replicationJobId" })
  replicationJobId?: string;
}
