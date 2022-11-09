import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListReplicationSetsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=replicationSetArns" })
  replicationSetArns: string[];
}
