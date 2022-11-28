import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReferenceDataSource } from "./referencedatasource";



export class AddApplicationReferenceDataSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @SpeakeasyMetadata({ data: "json, name=ReferenceDataSource" })
  referenceDataSource: ReferenceDataSource;
}
