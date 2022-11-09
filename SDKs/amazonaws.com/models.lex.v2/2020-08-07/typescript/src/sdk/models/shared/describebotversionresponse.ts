import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotStatusEnum } from "./botstatusenum";
import { DataPrivacy } from "./dataprivacy";


export class DescribeBotVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botName" })
  botName?: string;

  @Metadata({ data: "json, name=botStatus" })
  botStatus?: BotStatusEnum;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=dataPrivacy" })
  dataPrivacy?: DataPrivacy;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=failureReasons" })
  failureReasons?: string[];

  @Metadata({ data: "json, name=idleSessionTTLInSeconds" })
  idleSessionTtlInSeconds?: number;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
