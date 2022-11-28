import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTypeEnum } from "./imagetypeenum";



export class DescribeWorkspaceImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageIds" })
  imageIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ImageType" })
  imageType?: ImageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
