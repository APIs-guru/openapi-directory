import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Classification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advisoryText" })
  advisoryText?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=system" })
  system: string;
}
