import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SeekInfo } from "./seekinfo";
import { Electioneering } from "./electioneering";


export class ElectioneeringPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: SeekInfo;

  @Metadata({ data: "json, name=results", elemType: shared.Electioneering })
  results?: Electioneering[];
}
