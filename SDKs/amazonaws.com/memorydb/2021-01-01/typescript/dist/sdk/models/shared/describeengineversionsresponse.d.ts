import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EngineVersionInfo } from "./engineversioninfo";
export declare class DescribeEngineVersionsResponse extends SpeakeasyBase {
    engineVersions?: EngineVersionInfo[];
    nextToken?: string;
}
