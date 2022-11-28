import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeProjectVersionsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    projectArn: string;
    versionNames?: string[];
}
