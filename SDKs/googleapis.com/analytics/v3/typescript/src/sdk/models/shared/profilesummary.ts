import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProfileSummary
/** 
 * JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.
**/
export class ProfileSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=starred" })
  starred?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
