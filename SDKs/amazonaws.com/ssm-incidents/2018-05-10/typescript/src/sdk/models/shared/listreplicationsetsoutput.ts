import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListReplicationSetsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationSetArns" })
  replicationSetArns: string[];
}
