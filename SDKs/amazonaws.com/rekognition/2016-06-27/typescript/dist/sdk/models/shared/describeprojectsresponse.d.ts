import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectDescription } from "./projectdescription";
export declare class DescribeProjectsResponse extends SpeakeasyBase {
    nextToken?: string;
    projectDescriptions?: ProjectDescription[];
}
