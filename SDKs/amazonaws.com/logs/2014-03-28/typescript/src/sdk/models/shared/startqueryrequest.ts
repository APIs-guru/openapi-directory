import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime: number;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=logGroupNames" })
  logGroupNames?: string[];

  @Metadata({ data: "json, name=queryString" })
  queryString: string;

  @Metadata({ data: "json, name=startTime" })
  startTime: number;
}
