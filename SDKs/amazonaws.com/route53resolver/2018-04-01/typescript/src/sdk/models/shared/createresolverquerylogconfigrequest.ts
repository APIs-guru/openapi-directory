import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateResolverQueryLogConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationArn" })
  destinationArn: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
