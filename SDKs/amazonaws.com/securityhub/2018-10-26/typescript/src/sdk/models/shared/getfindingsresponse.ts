import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsSecurityFinding } from "./awssecurityfinding";


export class GetFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Findings", elemType: shared.AwsSecurityFinding })
  findings: AwsSecurityFinding[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
