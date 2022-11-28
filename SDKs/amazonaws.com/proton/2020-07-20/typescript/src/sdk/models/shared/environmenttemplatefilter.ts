import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnvironmentTemplateFilter
/** 
 * A search filter for environment templates.
**/
export class EnvironmentTemplateFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
