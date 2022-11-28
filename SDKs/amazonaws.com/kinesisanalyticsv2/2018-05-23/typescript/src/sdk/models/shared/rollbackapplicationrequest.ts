import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RollbackApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;
}
