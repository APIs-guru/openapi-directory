import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationArn" })
  applicationArn?: string;

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn?: string;
}
