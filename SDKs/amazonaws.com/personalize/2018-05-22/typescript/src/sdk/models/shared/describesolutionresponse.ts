import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Solution } from "./solution";



export class DescribeSolutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solution" })
  solution?: Solution;
}
