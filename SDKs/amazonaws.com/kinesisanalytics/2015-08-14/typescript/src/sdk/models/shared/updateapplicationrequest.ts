import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationUpdate } from "./applicationupdate";



export class UpdateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationUpdate" })
  applicationUpdate: ApplicationUpdate;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;
}
