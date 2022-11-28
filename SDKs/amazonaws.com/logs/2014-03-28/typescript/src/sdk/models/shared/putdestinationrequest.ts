import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutDestinationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn: string;
}
