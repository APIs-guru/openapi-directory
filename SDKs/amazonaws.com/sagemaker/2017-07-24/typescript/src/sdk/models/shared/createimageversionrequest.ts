import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateImageVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseImage" })
  baseImage: string;

  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=ImageName" })
  imageName: string;
}
