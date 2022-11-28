import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Statement } from "./statement";
import { Prompt } from "./prompt";
import { CodeHook } from "./codehook";
import { FollowUpPrompt } from "./followupprompt";
import { FulfillmentActivity } from "./fulfillmentactivity";
import { InputContext } from "./inputcontext";
import { KendraConfiguration } from "./kendraconfiguration";
import { OutputContext } from "./outputcontext";
import { Slot } from "./slot";



export class PutIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=conclusionStatement" })
  conclusionStatement?: Statement;

  @SpeakeasyMetadata({ data: "json, name=confirmationPrompt" })
  confirmationPrompt?: Prompt;

  @SpeakeasyMetadata({ data: "json, name=createVersion" })
  createVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dialogCodeHook" })
  dialogCodeHook?: CodeHook;

  @SpeakeasyMetadata({ data: "json, name=followUpPrompt" })
  followUpPrompt?: FollowUpPrompt;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentActivity" })
  fulfillmentActivity?: FulfillmentActivity;

  @SpeakeasyMetadata({ data: "json, name=inputContexts", elemType: InputContext })
  inputContexts?: InputContext[];

  @SpeakeasyMetadata({ data: "json, name=kendraConfiguration" })
  kendraConfiguration?: KendraConfiguration;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: OutputContext })
  outputContexts?: OutputContext[];

  @SpeakeasyMetadata({ data: "json, name=parentIntentSignature" })
  parentIntentSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=rejectionStatement" })
  rejectionStatement?: Statement;

  @SpeakeasyMetadata({ data: "json, name=sampleUtterances" })
  sampleUtterances?: string[];

  @SpeakeasyMetadata({ data: "json, name=slots", elemType: Slot })
  slots?: Slot[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
