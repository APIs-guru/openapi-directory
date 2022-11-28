import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchFlowExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=flowExecutionId" })
  flowExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=systemInstanceId" })
  systemInstanceId: string;
}
