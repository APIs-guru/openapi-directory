import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetParameterHistoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WithDecryption" })
  withDecryption?: boolean;
}
