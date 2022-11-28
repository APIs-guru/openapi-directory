import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreSignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileExtension" })
  fileExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaType" })
  mediaType?: string;
}
