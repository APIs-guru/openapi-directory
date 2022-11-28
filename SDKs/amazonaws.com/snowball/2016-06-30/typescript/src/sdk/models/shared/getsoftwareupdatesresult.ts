import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSoftwareUpdatesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UpdatesURI" })
  updatesUri?: string;
}
