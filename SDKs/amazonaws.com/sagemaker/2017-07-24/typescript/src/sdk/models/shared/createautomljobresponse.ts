import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAutoMlJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn: string;
}
