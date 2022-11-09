import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { MonitoringExecutionSortKeyEnum } from "./monitoringexecutionsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
import { ExecutionStatusEnum } from "./executionstatusenum";


export class ListMonitoringExecutionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName?: string;

  @Metadata({ data: "json, name=LastModifiedTimeAfter" })
  lastModifiedTimeAfter?: Date;

  @Metadata({ data: "json, name=LastModifiedTimeBefore" })
  lastModifiedTimeBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=MonitoringJobDefinitionName" })
  monitoringJobDefinitionName?: string;

  @Metadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName?: string;

  @Metadata({ data: "json, name=MonitoringTypeEquals" })
  monitoringTypeEquals?: MonitoringTypeEnum;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScheduledTimeAfter" })
  scheduledTimeAfter?: Date;

  @Metadata({ data: "json, name=ScheduledTimeBefore" })
  scheduledTimeBefore?: Date;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: MonitoringExecutionSortKeyEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=StatusEquals" })
  statusEquals?: ExecutionStatusEnum;
}
