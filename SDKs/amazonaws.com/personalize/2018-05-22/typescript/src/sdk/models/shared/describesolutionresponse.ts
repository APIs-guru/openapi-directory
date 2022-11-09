import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Solution } from "./solution";


export class DescribeSolutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=solution" })
  solution?: Solution;
}
