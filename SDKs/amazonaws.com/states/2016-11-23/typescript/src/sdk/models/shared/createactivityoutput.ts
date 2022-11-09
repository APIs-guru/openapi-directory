import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateActivityOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityArn" })
  activityArn: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;
}
