import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IconList extends SpeakeasyBase {
  @Metadata({ data: "json, name=depth" })
  depth: number;

  @Metadata({ data: "json, name=height" })
  height: number;

  @Metadata({ data: "json, name=mimetype" })
  mimetype: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=width" })
  width: number;
}
