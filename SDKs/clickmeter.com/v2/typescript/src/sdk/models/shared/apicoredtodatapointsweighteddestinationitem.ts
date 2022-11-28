import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoDatapointsWeightedDestinationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
