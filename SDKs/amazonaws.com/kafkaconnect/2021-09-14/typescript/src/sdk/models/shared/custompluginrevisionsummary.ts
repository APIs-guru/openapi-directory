import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomPluginContentTypeEnum } from "./customplugincontenttypeenum";
import { CustomPluginFileDescription } from "./custompluginfiledescription";
import { CustomPluginLocationDescription } from "./custompluginlocationdescription";


// CustomPluginRevisionSummary
/** 
 * Details about the revision of a custom plugin.
**/
export class CustomPluginRevisionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: CustomPluginContentTypeEnum;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fileDescription" })
  fileDescription?: CustomPluginFileDescription;

  @Metadata({ data: "json, name=location" })
  location?: CustomPluginLocationDescription;

  @Metadata({ data: "json, name=revision" })
  revision?: number;
}
