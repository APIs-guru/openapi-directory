import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectDescription } from "./projectdescription";


export class DescribeProjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProjectDescriptions", elemType: shared.ProjectDescription })
  projectDescriptions?: ProjectDescription[];
}
