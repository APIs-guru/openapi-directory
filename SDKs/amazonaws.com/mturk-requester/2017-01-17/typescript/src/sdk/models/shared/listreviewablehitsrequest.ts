import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReviewableHitStatusEnum } from "./reviewablehitstatusenum";


export class ListReviewableHiTsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HITTypeId" })
  hitTypeId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ReviewableHitStatusEnum;
}
