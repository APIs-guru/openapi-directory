import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Canary } from "./canary";


export class DescribeCanariesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Canaries", elemType: shared.Canary })
  canaries?: Canary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
