import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationUpdate } from "./applicationupdate";


export class UpdateApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=ApplicationUpdate" })
  applicationUpdate: ApplicationUpdate;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;
}
