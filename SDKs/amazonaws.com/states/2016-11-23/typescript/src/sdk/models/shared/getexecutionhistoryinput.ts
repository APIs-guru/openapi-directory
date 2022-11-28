import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExecutionHistoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionArn" })
  executionArn: string;

  @SpeakeasyMetadata({ data: "json, name=includeExecutionData" })
  includeExecutionData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reverseOrder" })
  reverseOrder?: boolean;
}
