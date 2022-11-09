import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutDestinationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationName" })
  destinationName: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=targetArn" })
  targetArn: string;
}
