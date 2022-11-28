import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Finding } from "./finding";



export class GetFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findings", elemType: Finding })
  findings?: Finding[];
}
