import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Country } from "./country";



export class CountriesList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries", elemType: Country })
  countries?: Country[];
}
