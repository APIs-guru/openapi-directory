import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Country } from "./country";


export class CountriesList extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries", elemType: shared.Country })
  countries?: Country[];
}
