import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreSignRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileExtension" })
  fileExtension?: string;

  @Metadata({ data: "json, name=mediaType" })
  mediaType?: string;
}
