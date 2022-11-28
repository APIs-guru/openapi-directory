import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName: string;
}
