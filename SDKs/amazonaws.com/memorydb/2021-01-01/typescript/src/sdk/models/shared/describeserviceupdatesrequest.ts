import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";



export class DescribeServiceUpdatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterNames" })
  clusterNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceUpdateName" })
  serviceUpdateName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ServiceUpdateStatusEnum[];
}
