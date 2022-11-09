import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";


export class DescribeServiceUpdatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterNames" })
  clusterNames?: string[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServiceUpdateName" })
  serviceUpdateName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ServiceUpdateStatusEnum[];
}
