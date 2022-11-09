import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationConfigurationTemplate } from "./replicationconfigurationtemplate";


export class DescribeReplicationConfigurationTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ReplicationConfigurationTemplate })
  items?: ReplicationConfigurationTemplate[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
