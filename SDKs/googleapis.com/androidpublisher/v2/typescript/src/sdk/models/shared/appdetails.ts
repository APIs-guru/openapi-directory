import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contactPhone" })
  contactPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=contactWebsite" })
  contactWebsite?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;
}
