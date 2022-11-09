import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompaniesFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=name" })
  name?: string;
}
