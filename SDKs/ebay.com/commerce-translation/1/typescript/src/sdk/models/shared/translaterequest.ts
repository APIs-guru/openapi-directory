import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TranslateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=text" })
  text?: string[];

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=translationContext" })
  translationContext?: string;
}
