import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfileSummary } from "./profilesummary";



// WebPropertySummary
/** 
 * JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.
**/
export class WebPropertySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=profiles", elemType: ProfileSummary })
  profiles?: ProfileSummary[];

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
