import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IconList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=depth" })
  depth: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=mimetype" })
  mimetype: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}
