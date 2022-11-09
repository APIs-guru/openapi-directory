import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribedServer } from "./describedserver";


export class DescribeServerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Server" })
  server: DescribedServer;
}
