import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateImageVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaseImage" })
  baseImage: string;

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName: string;
}
