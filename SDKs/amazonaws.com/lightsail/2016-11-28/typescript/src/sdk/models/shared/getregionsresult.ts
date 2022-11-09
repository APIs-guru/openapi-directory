import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Region } from "./region";


export class GetRegionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=regions", elemType: shared.Region })
  regions?: Region[];
}
