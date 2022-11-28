import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilterLogEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=filterPattern" })
  filterPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=interleaved" })
  interleaved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=logStreamNamePrefix" })
  logStreamNamePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=logStreamNames" })
  logStreamNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: number;
}
