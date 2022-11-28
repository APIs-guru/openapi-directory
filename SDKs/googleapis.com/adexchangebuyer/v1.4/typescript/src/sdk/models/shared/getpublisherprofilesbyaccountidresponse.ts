import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublisherProfileApiProto } from "./publisherprofileapiproto";



export class GetPublisherProfilesByAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profiles", elemType: PublisherProfileApiProto })
  profiles?: PublisherProfileApiProto[];
}
