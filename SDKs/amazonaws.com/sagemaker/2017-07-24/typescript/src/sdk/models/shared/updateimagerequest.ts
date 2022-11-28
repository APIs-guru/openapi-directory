import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteProperties" })
  deleteProperties?: string[];

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
