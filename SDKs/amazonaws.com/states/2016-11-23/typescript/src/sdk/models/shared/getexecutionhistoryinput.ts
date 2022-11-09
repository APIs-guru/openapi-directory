import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExecutionHistoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionArn" })
  executionArn: string;

  @Metadata({ data: "json, name=includeExecutionData" })
  includeExecutionData?: boolean;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reverseOrder" })
  reverseOrder?: boolean;
}
