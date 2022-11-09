import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopProjectVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn: string;
}
