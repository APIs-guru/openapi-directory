import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectDescription } from "./projectdescription";



export class DescribeProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectDescriptions", elemType: ProjectDescription })
  projectDescriptions?: ProjectDescription[];
}
