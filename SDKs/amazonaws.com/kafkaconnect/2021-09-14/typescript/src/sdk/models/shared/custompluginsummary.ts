import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomPluginStateEnum } from "./custompluginstateenum";
import { CustomPluginRevisionSummary } from "./custompluginrevisionsummary";



// CustomPluginSummary
/** 
 * A summary of the custom plugin.
**/
export class CustomPluginSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=customPluginArn" })
  customPluginArn?: string;

  @SpeakeasyMetadata({ data: "json, name=customPluginState" })
  customPluginState?: CustomPluginStateEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=latestRevision" })
  latestRevision?: CustomPluginRevisionSummary;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
