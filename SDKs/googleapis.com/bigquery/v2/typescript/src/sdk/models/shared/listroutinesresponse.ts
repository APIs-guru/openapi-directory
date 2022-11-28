import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Routine } from "./routine";



export class ListRoutinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=routines", elemType: Routine })
  routines?: Routine[];
}
