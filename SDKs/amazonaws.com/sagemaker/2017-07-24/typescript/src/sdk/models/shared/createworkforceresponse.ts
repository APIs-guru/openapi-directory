import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWorkforceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkforceArn" })
  workforceArn: string;
}
