import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupCount } from "./groupcount";



export class GetFindingStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countsByGroup", elemType: GroupCount })
  countsByGroup?: GroupCount[];
}
