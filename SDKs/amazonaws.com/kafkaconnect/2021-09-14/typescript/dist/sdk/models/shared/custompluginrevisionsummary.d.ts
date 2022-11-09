import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomPluginContentTypeEnum } from "./customplugincontenttypeenum";
import { CustomPluginFileDescription } from "./custompluginfiledescription";
import { CustomPluginLocationDescription } from "./custompluginlocationdescription";
/**
 * Details about the revision of a custom plugin.
**/
export declare class CustomPluginRevisionSummary extends SpeakeasyBase {
    contentType?: CustomPluginContentTypeEnum;
    creationTime?: Date;
    description?: string;
    fileDescription?: CustomPluginFileDescription;
    location?: CustomPluginLocationDescription;
    revision?: number;
}
