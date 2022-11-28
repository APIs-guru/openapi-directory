import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentAttributes } from "./contentattributes";



export class Content extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: ContentAttributes;

  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=isLive" })
  isLive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=playIndex" })
  playIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
