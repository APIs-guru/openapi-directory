import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityFinding } from "./awssecurityfinding";



export class GetFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Findings", elemType: AwsSecurityFinding })
  findings: AwsSecurityFinding[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
