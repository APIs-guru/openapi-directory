import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RollbackApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;
}
