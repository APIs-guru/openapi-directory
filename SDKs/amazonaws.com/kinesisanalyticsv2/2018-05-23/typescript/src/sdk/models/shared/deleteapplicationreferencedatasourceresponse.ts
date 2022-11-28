import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApplicationReferenceDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;
}
