import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
