import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Workforce } from "./workforce";


export class ListWorkforcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Workforces", elemType: shared.Workforce })
  workforces: Workforce[];
}
