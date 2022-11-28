import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutoCorrections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phrase" })
  phrase?: string;
}
