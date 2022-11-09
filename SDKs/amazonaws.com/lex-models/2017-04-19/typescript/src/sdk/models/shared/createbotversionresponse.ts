import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Statement } from "./statement";
import { Prompt } from "./prompt";
import { Intent } from "./intent";
import { LocaleEnum } from "./localeenum";
import { StatusEnum } from "./statusenum";


export class CreateBotVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortStatement" })
  abortStatement?: Statement;

  @Metadata({ data: "json, name=checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=childDirected" })
  childDirected?: boolean;

  @Metadata({ data: "json, name=clarificationPrompt" })
  clarificationPrompt?: Prompt;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=detectSentiment" })
  detectSentiment?: boolean;

  @Metadata({ data: "json, name=enableModelImprovements" })
  enableModelImprovements?: boolean;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=idleSessionTTLInSeconds" })
  idleSessionTtlInSeconds?: number;

  @Metadata({ data: "json, name=intents", elemType: shared.Intent })
  intents?: Intent[];

  @Metadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @Metadata({ data: "json, name=locale" })
  locale?: LocaleEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: StatusEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=voiceId" })
  voiceId?: string;
}
