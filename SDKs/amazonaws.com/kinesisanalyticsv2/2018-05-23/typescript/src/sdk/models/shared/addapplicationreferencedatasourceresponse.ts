import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReferenceDataSourceDescription } from "./referencedatasourcedescription";


export class AddApplicationReferenceDataSourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @Metadata({ data: "json, name=ReferenceDataSourceDescriptions", elemType: shared.ReferenceDataSourceDescription })
  referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
