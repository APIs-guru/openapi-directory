import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DialogCodeHookSettings } from "./dialogcodehooksettings";
import { FulfillmentCodeHookSettings } from "./fulfillmentcodehooksettings";
import { InputContext } from "./inputcontext";
import { IntentClosingSetting } from "./intentclosingsetting";
import { IntentConfirmationSetting } from "./intentconfirmationsetting";
import { KendraConfiguration } from "./kendraconfiguration";
import { OutputContext } from "./outputcontext";
import { SampleUtterance } from "./sampleutterance";



export class CreateIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dialogCodeHook" })
  dialogCodeHook?: DialogCodeHookSettings;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentCodeHook" })
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  @SpeakeasyMetadata({ data: "json, name=inputContexts", elemType: InputContext })
  inputContexts?: InputContext[];

  @SpeakeasyMetadata({ data: "json, name=intentClosingSetting" })
  intentClosingSetting?: IntentClosingSetting;

  @SpeakeasyMetadata({ data: "json, name=intentConfirmationSetting" })
  intentConfirmationSetting?: IntentConfirmationSetting;

  @SpeakeasyMetadata({ data: "json, name=intentId" })
  intentId?: string;

  @SpeakeasyMetadata({ data: "json, name=intentName" })
  intentName?: string;

  @SpeakeasyMetadata({ data: "json, name=kendraConfiguration" })
  kendraConfiguration?: KendraConfiguration;

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId?: string;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: OutputContext })
  outputContexts?: OutputContext[];

  @SpeakeasyMetadata({ data: "json, name=parentIntentSignature" })
  parentIntentSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleUtterances", elemType: SampleUtterance })
  sampleUtterances?: SampleUtterance[];
}
