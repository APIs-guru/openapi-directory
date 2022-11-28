import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectSummary
/** 
 * Contains project summary information.
**/
export class ProjectSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
