import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExpansionFile
/** 
 * An expansion file. The resource for ExpansionFilesService.
**/
export class ExpansionFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileSize" })
  fileSize?: string;

  @SpeakeasyMetadata({ data: "json, name=referencesVersion" })
  referencesVersion?: number;
}
