import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineVersionInfo } from "./engineversioninfo";



export class DescribeEngineVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EngineVersions", elemType: EngineVersionInfo })
  engineVersions?: EngineVersionInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
