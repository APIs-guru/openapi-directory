import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=logGroupNames" })
  logGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: number;
}
