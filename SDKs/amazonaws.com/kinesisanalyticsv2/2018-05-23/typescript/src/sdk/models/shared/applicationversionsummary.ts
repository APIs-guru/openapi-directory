import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";


// ApplicationVersionSummary
/** 
 * The summary of the application version.
**/
export class ApplicationVersionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationStatus" })
  applicationStatus: ApplicationStatusEnum;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;
}
