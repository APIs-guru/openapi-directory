import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageTypeEnum } from "./imagetypeenum";


export class DescribeWorkspaceImagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageIds" })
  imageIds?: string[];

  @Metadata({ data: "json, name=ImageType" })
  imageType?: ImageTypeEnum;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
