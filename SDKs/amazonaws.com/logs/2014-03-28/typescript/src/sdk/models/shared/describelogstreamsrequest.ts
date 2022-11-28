import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderByEnum } from "./orderbyenum";



export class DescribeLogStreamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descending" })
  descending?: boolean;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=logStreamNamePrefix" })
  logStreamNamePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: OrderByEnum;
}
