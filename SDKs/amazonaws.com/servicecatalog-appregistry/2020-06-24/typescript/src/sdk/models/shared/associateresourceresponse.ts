import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationArn" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn?: string;
}
