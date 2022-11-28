import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationArn" })
  destinationArn: string;

  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn: string;
}
