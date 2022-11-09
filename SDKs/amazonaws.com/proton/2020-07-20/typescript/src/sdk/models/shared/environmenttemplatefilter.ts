import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnvironmentTemplateFilter
/** 
 * A search filter for environment templates.
**/
export class EnvironmentTemplateFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
