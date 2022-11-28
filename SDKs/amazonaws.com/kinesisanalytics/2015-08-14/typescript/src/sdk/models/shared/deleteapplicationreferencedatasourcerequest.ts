import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApplicationReferenceDataSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId: string;
}
