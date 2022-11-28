import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReferenceDataSourceDescription } from "./referencedatasourcedescription";



export class AddApplicationReferenceDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=ReferenceDataSourceDescriptions", elemType: ReferenceDataSourceDescription })
  referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
