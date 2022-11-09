import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentAttributes } from "./contentattributes";


export class Content extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: ContentAttributes;

  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=identifier" })
  identifier: string;

  @Metadata({ data: "json, name=isLive" })
  isLive?: boolean;

  @Metadata({ data: "json, name=playIndex" })
  playIndex?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
