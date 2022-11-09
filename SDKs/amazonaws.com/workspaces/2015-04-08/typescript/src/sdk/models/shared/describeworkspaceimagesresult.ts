import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkspaceImage } from "./workspaceimage";


export class DescribeWorkspaceImagesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Images", elemType: shared.WorkspaceImage })
  images?: WorkspaceImage[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
