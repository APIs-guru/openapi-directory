import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Dimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=dpi" })
  dpi?: number;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
