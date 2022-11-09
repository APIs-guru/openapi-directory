import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutoCorrections extends SpeakeasyBase {
  @Metadata({ data: "json, name=phrase" })
  phrase?: string;
}
