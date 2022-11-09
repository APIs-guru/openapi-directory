import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoDatapointsWeightedDestinationItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
