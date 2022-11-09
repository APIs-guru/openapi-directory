import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProfileSummary } from "./profilesummary";


// WebPropertySummary
/** 
 * JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.
**/
export class WebPropertySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=level" })
  level?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=profiles", elemType: shared.ProfileSummary })
  profiles?: ProfileSummary[];

  @Metadata({ data: "json, name=starred" })
  starred?: boolean;

  @Metadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
