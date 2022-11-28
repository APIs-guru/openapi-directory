import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Canary } from "./canary";



export class DescribeCanariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Canaries", elemType: Canary })
  canaries?: Canary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
