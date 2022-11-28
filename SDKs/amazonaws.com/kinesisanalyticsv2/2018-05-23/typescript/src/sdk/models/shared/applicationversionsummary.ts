import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";



// ApplicationVersionSummary
/** 
 * The summary of the application version.
**/
export class ApplicationVersionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationStatus" })
  applicationStatus: ApplicationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;
}
