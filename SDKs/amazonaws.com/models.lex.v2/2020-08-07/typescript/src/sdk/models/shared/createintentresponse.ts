import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DialogCodeHookSettings } from "./dialogcodehooksettings";
import { FulfillmentCodeHookSettings } from "./fulfillmentcodehooksettings";
import { InputContext } from "./inputcontext";
import { IntentClosingSetting } from "./intentclosingsetting";
import { IntentConfirmationSetting } from "./intentconfirmationsetting";
import { KendraConfiguration } from "./kendraconfiguration";
import { OutputContext } from "./outputcontext";
import { SampleUtterance } from "./sampleutterance";


export class CreateIntentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dialogCodeHook" })
  dialogCodeHook?: DialogCodeHookSettings;

  @Metadata({ data: "json, name=fulfillmentCodeHook" })
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  @Metadata({ data: "json, name=inputContexts", elemType: shared.InputContext })
  inputContexts?: InputContext[];

  @Metadata({ data: "json, name=intentClosingSetting" })
  intentClosingSetting?: IntentClosingSetting;

  @Metadata({ data: "json, name=intentConfirmationSetting" })
  intentConfirmationSetting?: IntentConfirmationSetting;

  @Metadata({ data: "json, name=intentId" })
  intentId?: string;

  @Metadata({ data: "json, name=intentName" })
  intentName?: string;

  @Metadata({ data: "json, name=kendraConfiguration" })
  kendraConfiguration?: KendraConfiguration;

  @Metadata({ data: "json, name=localeId" })
  localeId?: string;

  @Metadata({ data: "json, name=outputContexts", elemType: shared.OutputContext })
  outputContexts?: OutputContext[];

  @Metadata({ data: "json, name=parentIntentSignature" })
  parentIntentSignature?: string;

  @Metadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance })
  sampleUtterances?: SampleUtterance[];
}
