import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Qualification } from "./qualification";



export class GetQualificationScoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Qualification" })
  qualification?: Qualification;
}
