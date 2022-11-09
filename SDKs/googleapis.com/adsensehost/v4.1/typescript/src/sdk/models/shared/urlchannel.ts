import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UrlChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=urlPattern" })
  urlPattern?: string;
}
