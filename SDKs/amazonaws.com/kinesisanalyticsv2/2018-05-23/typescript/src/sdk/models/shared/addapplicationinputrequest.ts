import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Input } from "./input";



export class AddApplicationInputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @SpeakeasyMetadata({ data: "json, name=Input" })
  input: Input;
}
