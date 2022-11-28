import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectVersionDescription } from "./projectversiondescription";



export class DescribeProjectVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectVersionDescriptions", elemType: ProjectVersionDescription })
  projectVersionDescriptions?: ProjectVersionDescription[];
}
