import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SyncActionEnum } from "./syncactionenum";



export class SyncResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionTaken" })
  actionTaken?: SyncActionEnum;

  @SpeakeasyMetadata({ data: "json, name=applicationArn" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn?: string;
}
