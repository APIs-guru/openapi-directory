import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Qualification } from "./qualification";


export class GetQualificationScoreResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Qualification" })
  qualification?: Qualification;
}
