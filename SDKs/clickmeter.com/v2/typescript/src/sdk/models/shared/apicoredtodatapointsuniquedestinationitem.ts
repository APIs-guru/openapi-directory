import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoDatapointsUniqueDestinationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstDestinationUrl" })
  firstDestinationUrl?: string;
}
