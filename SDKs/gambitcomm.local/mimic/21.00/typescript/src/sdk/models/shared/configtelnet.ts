import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigTelnet extends SpeakeasyBase {
  @Metadata({ data: "json, name=keymap" })
  keymap?: string;

  @Metadata({ data: "json, name=paging_prompt" })
  pagingPrompt?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=prompt" })
  prompt?: string;

  @Metadata({ data: "json, name=rule" })
  rule?: string;

  @Metadata({ data: "json, name=userdb" })
  userdb?: string;
}
