import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeekInfo } from "./seekinfo";
import { Electioneering } from "./electioneering";



export class ElectioneeringPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: SeekInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Electioneering })
  results?: Electioneering[];
}
