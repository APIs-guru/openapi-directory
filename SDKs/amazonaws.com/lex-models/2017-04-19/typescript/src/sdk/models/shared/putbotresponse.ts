import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Statement } from "./statement";
import { Prompt } from "./prompt";
import { Intent } from "./intent";
import { LocaleEnum } from "./localeenum";
import { StatusEnum } from "./statusenum";
import { Tag } from "./tag";



export class PutBotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortStatement" })
  abortStatement?: Statement;

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=childDirected" })
  childDirected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clarificationPrompt" })
  clarificationPrompt?: Prompt;

  @SpeakeasyMetadata({ data: "json, name=createVersion" })
  createVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=detectSentiment" })
  detectSentiment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableModelImprovements" })
  enableModelImprovements?: boolean;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=idleSessionTTLInSeconds" })
  idleSessionTtlInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=intents", elemType: Intent })
  intents?: Intent[];

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: LocaleEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nluIntentConfidenceThreshold" })
  nluIntentConfidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=voiceId" })
  voiceId?: string;
}
