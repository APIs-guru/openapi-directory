import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupCount } from "./groupcount";


export class GetFindingStatisticsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=countsByGroup", elemType: shared.GroupCount })
  countsByGroup?: GroupCount[];
}
