import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectVersionDescription } from "./projectversiondescription";
export declare class DescribeProjectVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    projectVersionDescriptions?: ProjectVersionDescription[];
}
