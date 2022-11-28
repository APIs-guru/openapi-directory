import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Output } from "./output";



export class AddApplicationOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @SpeakeasyMetadata({ data: "json, name=Output" })
  output: Output;
}
