import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Statement } from "./statement";
import { Prompt } from "./prompt";
import { CodeHook } from "./codehook";
import { FollowUpPrompt } from "./followupprompt";
import { FulfillmentActivity } from "./fulfillmentactivity";
import { InputContext } from "./inputcontext";
import { KendraConfiguration } from "./kendraconfiguration";
import { OutputContext } from "./outputcontext";
import { Statement } from "./statement";
import { Slot } from "./slot";


export class GetIntentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=conclusionStatement" })
  conclusionStatement?: Statement;

  @Metadata({ data: "json, name=confirmationPrompt" })
  confirmationPrompt?: Prompt;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dialogCodeHook" })
  dialogCodeHook?: CodeHook;

  @Metadata({ data: "json, name=followUpPrompt" })
  followUpPrompt?: FollowUpPrompt;

  @Metadata({ data: "json, name=fulfillmentActivity" })
  fulfillmentActivity?: FulfillmentActivity;

  @Metadata({ data: "json, name=inputContexts", elemType: shared.InputContext })
  inputContexts?: InputContext[];

  @Metadata({ data: "json, name=kendraConfiguration" })
  kendraConfiguration?: KendraConfiguration;

  @Metadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outputContexts", elemType: shared.OutputContext })
  outputContexts?: OutputContext[];

  @Metadata({ data: "json, name=parentIntentSignature" })
  parentIntentSignature?: string;

  @Metadata({ data: "json, name=rejectionStatement" })
  rejectionStatement?: Statement;

  @Metadata({ data: "json, name=sampleUtterances" })
  sampleUtterances?: string[];

  @Metadata({ data: "json, name=slots", elemType: shared.Slot })
  slots?: Slot[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}
