import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionFilter } from "./sessionfilter";
import { SessionStateEnum } from "./sessionstateenum";



export class DescribeSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: SessionFilter })
  filters?: SessionFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state: SessionStateEnum;
}
