import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TargetingValueSize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
