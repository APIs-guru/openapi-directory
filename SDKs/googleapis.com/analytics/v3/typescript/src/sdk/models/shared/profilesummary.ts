import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProfileSummary
/** 
 * JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.
**/
export class ProfileSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
