import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryStatusEnum } from "./querystatusenum";


export class DescribeQueriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=status" })
  status?: QueryStatusEnum;
}
