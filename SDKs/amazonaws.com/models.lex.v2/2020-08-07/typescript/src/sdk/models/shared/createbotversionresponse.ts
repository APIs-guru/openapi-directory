import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BotStatusEnum } from "./botstatusenum";
import { BotVersionLocaleDetails } from "./botversionlocaledetails";


export class CreateBotVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botStatus" })
  botStatus?: BotStatusEnum;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=botVersionLocaleSpecification", elemType: shared.BotVersionLocaleDetails })
  botVersionLocaleSpecification?: Map<string, BotVersionLocaleDetails>;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
