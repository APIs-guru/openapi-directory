import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ThemeColor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=opacity" })
  opacity?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
