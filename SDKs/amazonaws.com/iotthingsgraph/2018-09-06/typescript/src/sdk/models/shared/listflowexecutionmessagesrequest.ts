import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListFlowExecutionMessagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=flowExecutionId" })
  flowExecutionId: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
