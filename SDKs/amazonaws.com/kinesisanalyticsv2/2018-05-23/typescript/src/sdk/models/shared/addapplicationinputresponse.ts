import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputDescription } from "./inputdescription";


export class AddApplicationInputResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @Metadata({ data: "json, name=InputDescriptions", elemType: shared.InputDescription })
  inputDescriptions?: InputDescription[];
}
