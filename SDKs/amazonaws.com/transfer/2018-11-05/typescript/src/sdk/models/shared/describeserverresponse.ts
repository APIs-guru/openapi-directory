import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribedServer } from "./describedserver";



export class DescribeServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Server" })
  server: DescribedServer;
}
