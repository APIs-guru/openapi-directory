import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutDestinationPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicy" })
  accessPolicy: string;

  @Metadata({ data: "json, name=destinationName" })
  destinationName: string;
}
