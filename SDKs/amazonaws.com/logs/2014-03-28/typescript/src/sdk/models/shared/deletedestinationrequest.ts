import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDestinationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationName" })
  destinationName: string;
}
