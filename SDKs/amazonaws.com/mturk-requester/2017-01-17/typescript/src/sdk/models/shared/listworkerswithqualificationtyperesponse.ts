import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Qualification } from "./qualification";


export class ListWorkersWithQualificationTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=NumResults" })
  numResults?: number;

  @Metadata({ data: "json, name=Qualifications", elemType: shared.Qualification })
  qualifications?: Qualification[];
}
