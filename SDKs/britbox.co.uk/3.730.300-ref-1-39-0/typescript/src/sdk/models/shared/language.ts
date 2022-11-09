import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Language extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}
