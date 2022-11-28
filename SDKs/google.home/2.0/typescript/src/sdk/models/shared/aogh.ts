import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Aogh extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aogh_api_version" })
  aoghApiVersion: string;
}
