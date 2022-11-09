import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobUnlockCodeResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=UnlockCode" })
  unlockCode?: string;
}
