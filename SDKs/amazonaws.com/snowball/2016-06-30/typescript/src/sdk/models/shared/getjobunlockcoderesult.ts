import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobUnlockCodeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UnlockCode" })
  unlockCode?: string;
}
