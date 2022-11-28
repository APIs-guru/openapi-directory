import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryStatusEnum } from "./querystatusenum";



export class DescribeQueriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: QueryStatusEnum;
}
