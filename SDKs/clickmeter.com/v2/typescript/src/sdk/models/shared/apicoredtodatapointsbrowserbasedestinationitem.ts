import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoDatapointsBrowserBaseDestinationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailDestinationUrl" })
  emailDestinationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileDestinationUrl" })
  mobileDestinationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=spidersDestinationUrl" })
  spidersDestinationUrl?: string;
}
