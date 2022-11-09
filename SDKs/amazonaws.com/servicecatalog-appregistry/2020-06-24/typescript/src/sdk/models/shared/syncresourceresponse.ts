import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SyncActionEnum } from "./syncactionenum";


export class SyncResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionTaken" })
  actionTaken?: SyncActionEnum;

  @Metadata({ data: "json, name=applicationArn" })
  applicationArn?: string;

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn?: string;
}
