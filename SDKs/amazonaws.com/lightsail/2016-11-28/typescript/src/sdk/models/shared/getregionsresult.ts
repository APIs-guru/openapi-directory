import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";



export class GetRegionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regions", elemType: Region })
  regions?: Region[];
}
