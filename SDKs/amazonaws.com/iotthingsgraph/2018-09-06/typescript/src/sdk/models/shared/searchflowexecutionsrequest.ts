import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchFlowExecutionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=flowExecutionId" })
  flowExecutionId?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=systemInstanceId" })
  systemInstanceId: string;
}
