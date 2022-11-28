import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
import { BotVersionLocaleDetails } from "./botversionlocaledetails";



export class CreateBotVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botStatus" })
  botStatus?: BotStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersionLocaleSpecification", elemType: BotVersionLocaleDetails })
  botVersionLocaleSpecification?: Map<string, BotVersionLocaleDetails>;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
