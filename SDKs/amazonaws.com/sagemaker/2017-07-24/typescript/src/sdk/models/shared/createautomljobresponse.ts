import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAutoMlJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn: string;
}
