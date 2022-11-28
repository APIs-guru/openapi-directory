import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomPluginContentTypeEnum } from "./customplugincontenttypeenum";
import { CustomPluginFileDescription } from "./custompluginfiledescription";
import { CustomPluginLocationDescription } from "./custompluginlocationdescription";



// CustomPluginRevisionSummary
/** 
 * Details about the revision of a custom plugin.
**/
export class CustomPluginRevisionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: CustomPluginContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fileDescription" })
  fileDescription?: CustomPluginFileDescription;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: CustomPluginLocationDescription;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;
}
