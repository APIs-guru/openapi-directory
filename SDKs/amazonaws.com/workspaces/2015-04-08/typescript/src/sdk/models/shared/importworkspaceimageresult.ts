import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImportWorkspaceImageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageId" })
  imageId?: string;
}
