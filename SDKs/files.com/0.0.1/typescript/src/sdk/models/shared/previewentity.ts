import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=download_uri" })
  downloadUri?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
