import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutDestinationPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicy" })
  accessPolicy: string;

  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName: string;
}
