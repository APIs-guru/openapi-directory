import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OutputDescription } from "./outputdescription";


export class AddApplicationOutputResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @Metadata({ data: "json, name=OutputDescriptions", elemType: shared.OutputDescription })
  outputDescriptions?: OutputDescription[];
}
