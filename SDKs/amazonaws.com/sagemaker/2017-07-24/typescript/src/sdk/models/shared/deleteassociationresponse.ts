import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAssociationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @Metadata({ data: "json, name=SourceArn" })
  sourceArn?: string;
}
