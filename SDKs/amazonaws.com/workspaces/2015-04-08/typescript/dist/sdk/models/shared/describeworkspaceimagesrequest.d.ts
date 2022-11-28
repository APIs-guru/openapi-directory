import { SpeakeasyBase } from "../../../internal/utils";
import { ImageTypeEnum } from "./imagetypeenum";
export declare class DescribeWorkspaceImagesRequest extends SpeakeasyBase {
    imageIds?: string[];
    imageType?: ImageTypeEnum;
    maxResults?: number;
    nextToken?: string;
}
