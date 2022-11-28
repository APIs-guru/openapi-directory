import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workforce } from "./workforce";



export class ListWorkforcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Workforces", elemType: Workforce })
  workforces: Workforce[];
}
