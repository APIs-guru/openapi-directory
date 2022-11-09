import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { MonitoringScheduleSortKeyEnum } from "./monitoringschedulesortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
import { ScheduleStatusEnum } from "./schedulestatusenum";


export class ListMonitoringSchedulesRequest extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=MonitoringTypeEquals" })
  monitoringTypeEquals?: MonitoringTypeEnum;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: MonitoringScheduleSortKeyEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=StatusEquals" })
  statusEquals?: ScheduleStatusEnum;
}
