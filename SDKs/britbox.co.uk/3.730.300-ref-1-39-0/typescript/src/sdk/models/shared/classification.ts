import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Classification extends SpeakeasyBase {
  @Metadata({ data: "json, name=advisoryText" })
  advisoryText?: string;

  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=images" })
  images: Map<string, string>;

  @Metadata({ data: "json, name=level" })
  level: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=system" })
  system: string;
}
