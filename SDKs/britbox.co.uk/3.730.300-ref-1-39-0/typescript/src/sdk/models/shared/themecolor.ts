import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ThemeColor extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=opacity" })
  opacity?: number;

  @Metadata({ data: "json, name=value" })
  value: string;
}
