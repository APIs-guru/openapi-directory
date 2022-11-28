import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaceSearchSortByEnum } from "./facesearchsortbyenum";



export class GetFaceSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: FaceSearchSortByEnum;
}
