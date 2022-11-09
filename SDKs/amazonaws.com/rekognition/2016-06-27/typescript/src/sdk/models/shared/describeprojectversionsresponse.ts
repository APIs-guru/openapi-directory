import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectVersionDescription } from "./projectversiondescription";


export class DescribeProjectVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProjectVersionDescriptions", elemType: shared.ProjectVersionDescription })
  projectVersionDescriptions?: ProjectVersionDescription[];
}
