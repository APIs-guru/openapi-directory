import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FaceSearchSortByEnum } from "./facesearchsortbyenum";


export class GetFaceSearchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: FaceSearchSortByEnum;
}
