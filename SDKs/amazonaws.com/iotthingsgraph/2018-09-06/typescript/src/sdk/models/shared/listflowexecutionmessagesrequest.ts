import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListFlowExecutionMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flowExecutionId" })
  flowExecutionId: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
