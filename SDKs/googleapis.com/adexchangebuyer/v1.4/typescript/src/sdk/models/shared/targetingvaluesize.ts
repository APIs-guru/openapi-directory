import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TargetingValueSize extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
