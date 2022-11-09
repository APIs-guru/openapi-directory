import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteProperties" })
  deleteProperties?: string[];

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=ImageName" })
  imageName: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
