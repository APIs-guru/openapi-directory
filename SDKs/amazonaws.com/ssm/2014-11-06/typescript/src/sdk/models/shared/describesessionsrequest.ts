import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SessionFilter } from "./sessionfilter";
import { SessionStateEnum } from "./sessionstateenum";


export class DescribeSessionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.SessionFilter })
  filters?: SessionFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=State" })
  state: SessionStateEnum;
}
