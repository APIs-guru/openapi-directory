import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewableHitStatusEnum } from "./reviewablehitstatusenum";



export class ListReviewableHiTsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HITTypeId" })
  hitTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ReviewableHitStatusEnum;
}
