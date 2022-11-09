import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Output } from "./output";


export class AddApplicationOutputRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @Metadata({ data: "json, name=Output" })
  output: Output;
}
