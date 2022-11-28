import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CandidateSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=office_sought" })
  officeSought?: string;
}
