import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationEdgeTypeEnum } from "./associationedgetypeenum";



export class AddAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationType" })
  associationType?: AssociationEdgeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DestinationArn" })
  destinationArn: string;

  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn: string;
}
