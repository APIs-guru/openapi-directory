import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationConfigurationTemplate } from "./replicationconfigurationtemplate";



export class DescribeReplicationConfigurationTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ReplicationConfigurationTemplate })
  items?: ReplicationConfigurationTemplate[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
