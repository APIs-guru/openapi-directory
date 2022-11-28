import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
import { DataPrivacy } from "./dataprivacy";



export class DescribeBotVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botName" })
  botName?: string;

  @SpeakeasyMetadata({ data: "json, name=botStatus" })
  botStatus?: BotStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=dataPrivacy" })
  dataPrivacy?: DataPrivacy;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReasons" })
  failureReasons?: string[];

  @SpeakeasyMetadata({ data: "json, name=idleSessionTTLInSeconds" })
  idleSessionTtlInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
