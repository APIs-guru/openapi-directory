import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImageVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version: number;
}
