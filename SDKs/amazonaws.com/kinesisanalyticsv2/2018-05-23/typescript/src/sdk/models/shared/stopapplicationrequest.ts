import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=Force" })
  force?: boolean;
}
