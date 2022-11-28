import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDestinationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName: string;
}
