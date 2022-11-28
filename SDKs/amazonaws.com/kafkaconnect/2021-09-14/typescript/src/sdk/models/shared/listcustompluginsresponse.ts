import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomPluginSummary } from "./custompluginsummary";



export class ListCustomPluginsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customPlugins", elemType: CustomPluginSummary })
  customPlugins?: CustomPluginSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
