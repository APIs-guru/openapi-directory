import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTerminologiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
