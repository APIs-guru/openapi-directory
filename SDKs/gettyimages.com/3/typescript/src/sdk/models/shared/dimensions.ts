import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Dimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dpi" })
  dpi?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
