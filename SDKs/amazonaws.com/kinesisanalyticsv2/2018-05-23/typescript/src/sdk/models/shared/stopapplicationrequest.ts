import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=Force" })
  force?: boolean;
}
