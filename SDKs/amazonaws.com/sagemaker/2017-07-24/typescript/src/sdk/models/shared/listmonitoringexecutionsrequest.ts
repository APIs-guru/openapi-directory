import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { MonitoringExecutionSortKeyEnum } from "./monitoringexecutionsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
import { ExecutionStatusEnum } from "./executionstatusenum";



export class ListMonitoringExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTimeAfter" })
  lastModifiedTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTimeBefore" })
  lastModifiedTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=MonitoringJobDefinitionName" })
  monitoringJobDefinitionName?: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName?: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringTypeEquals" })
  monitoringTypeEquals?: MonitoringTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledTimeAfter" })
  scheduledTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=ScheduledTimeBefore" })
  scheduledTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: MonitoringExecutionSortKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusEquals" })
  statusEquals?: ExecutionStatusEnum;
}
