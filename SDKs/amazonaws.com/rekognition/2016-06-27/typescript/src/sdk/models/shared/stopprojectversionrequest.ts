import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopProjectVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn: string;
}
