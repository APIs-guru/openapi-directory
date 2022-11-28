import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonTrackingSortByEnum } from "./persontrackingsortbyenum";



export class GetPersonTrackingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: PersonTrackingSortByEnum;
}
