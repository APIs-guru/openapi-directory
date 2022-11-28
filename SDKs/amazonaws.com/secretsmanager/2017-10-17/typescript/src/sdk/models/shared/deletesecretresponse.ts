import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=DeletionDate" })
  deletionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
