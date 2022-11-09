import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomPluginSummary } from "./custompluginsummary";


export class ListCustomPluginsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customPlugins", elemType: shared.CustomPluginSummary })
  customPlugins?: CustomPluginSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
