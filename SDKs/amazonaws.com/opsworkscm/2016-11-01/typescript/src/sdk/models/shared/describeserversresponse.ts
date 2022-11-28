import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Server } from "./server";



export class DescribeServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Servers", elemType: Server })
  servers?: Server[];
}
