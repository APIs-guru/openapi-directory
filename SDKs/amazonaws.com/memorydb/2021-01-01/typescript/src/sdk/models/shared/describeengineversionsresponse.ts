import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EngineVersionInfo } from "./engineversioninfo";


export class DescribeEngineVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EngineVersions", elemType: shared.EngineVersionInfo })
  engineVersions?: EngineVersionInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
