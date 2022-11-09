import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssociationEdgeTypeEnum } from "./associationedgetypeenum";


export class AddAssociationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationType" })
  associationType?: AssociationEdgeTypeEnum;

  @Metadata({ data: "json, name=DestinationArn" })
  destinationArn: string;

  @Metadata({ data: "json, name=SourceArn" })
  sourceArn: string;
}
