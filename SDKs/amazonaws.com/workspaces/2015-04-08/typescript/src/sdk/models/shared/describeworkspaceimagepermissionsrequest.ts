import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeWorkspaceImagePermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
