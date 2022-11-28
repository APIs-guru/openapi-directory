import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Qualification } from "./qualification";



export class ListWorkersWithQualificationTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NumResults" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=Qualifications", elemType: Qualification })
  qualifications?: Qualification[];
}
