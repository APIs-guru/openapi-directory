import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigTelnet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keymap" })
  keymap?: string;

  @SpeakeasyMetadata({ data: "json, name=paging_prompt" })
  pagingPrompt?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt?: string;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: string;

  @SpeakeasyMetadata({ data: "json, name=userdb" })
  userdb?: string;
}
