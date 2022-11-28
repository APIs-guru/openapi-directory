import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download_uri" })
  downloadUri?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
