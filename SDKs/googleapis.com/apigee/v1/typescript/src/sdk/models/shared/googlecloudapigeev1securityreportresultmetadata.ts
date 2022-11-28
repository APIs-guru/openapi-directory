import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1SecurityReportResultMetadata
/** 
 * Contains informations about the security report results.
**/
export class GoogleCloudApigeeV1SecurityReportResultMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}
