import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublisherProfileApiProto } from "./publisherprofileapiproto";


export class GetPublisherProfilesByAccountIdResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=profiles", elemType: shared.PublisherProfileApiProto })
  profiles?: PublisherProfileApiProto[];
}
