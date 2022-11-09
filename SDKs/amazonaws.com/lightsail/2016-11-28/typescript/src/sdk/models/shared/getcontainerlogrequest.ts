import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainerLogRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerName" })
  containerName: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=filterPattern" })
  filterPattern?: string;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;
}
