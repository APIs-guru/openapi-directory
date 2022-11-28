import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainerLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=filterPattern" })
  filterPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;
}
