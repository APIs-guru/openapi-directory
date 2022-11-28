import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputDescription } from "./inputdescription";



export class AddApplicationInputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=InputDescriptions", elemType: InputDescription })
  inputDescriptions?: InputDescription[];
}
