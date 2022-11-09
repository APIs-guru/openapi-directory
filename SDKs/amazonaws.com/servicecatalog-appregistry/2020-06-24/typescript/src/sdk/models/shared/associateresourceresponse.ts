import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationArn" })
  applicationArn?: string;

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn?: string;
}
