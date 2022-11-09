import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateResolverQueryLogConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId: string;

  @Metadata({ data: "json, name=DestinationArn" })
  destinationArn: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
