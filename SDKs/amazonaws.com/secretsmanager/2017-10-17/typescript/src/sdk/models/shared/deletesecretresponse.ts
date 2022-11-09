import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSecretResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=DeletionDate" })
  deletionDate?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
