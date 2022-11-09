import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderByEnum } from "./orderbyenum";


export class DescribeLogStreamsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=descending" })
  descending?: boolean;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=logStreamNamePrefix" })
  logStreamNamePrefix?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: OrderByEnum;
}
