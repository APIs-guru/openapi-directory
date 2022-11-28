import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListActivitiesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
