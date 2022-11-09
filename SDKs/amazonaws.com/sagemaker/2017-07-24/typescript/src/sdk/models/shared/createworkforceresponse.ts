import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateWorkforceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkforceArn" })
  workforceArn: string;
}
