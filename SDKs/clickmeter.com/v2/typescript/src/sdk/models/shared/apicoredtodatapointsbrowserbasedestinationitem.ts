import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoDatapointsBrowserBaseDestinationItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailDestinationUrl" })
  emailDestinationUrl?: string;

  @Metadata({ data: "json, name=mobileDestinationUrl" })
  mobileDestinationUrl?: string;

  @Metadata({ data: "json, name=spidersDestinationUrl" })
  spidersDestinationUrl?: string;
}
