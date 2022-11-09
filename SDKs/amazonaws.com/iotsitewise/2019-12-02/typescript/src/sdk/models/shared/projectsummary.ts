import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectSummary
/** 
 * Contains project summary information.
**/
export class ProjectSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;
}
