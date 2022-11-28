import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceImage } from "./workspaceimage";



export class DescribeWorkspaceImagesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Images", elemType: WorkspaceImage })
  images?: WorkspaceImage[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
