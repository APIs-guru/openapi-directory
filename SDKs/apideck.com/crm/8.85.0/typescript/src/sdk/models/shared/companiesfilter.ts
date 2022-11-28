import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompaniesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=name" })
  name?: string;
}
