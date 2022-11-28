import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputDescription } from "./outputdescription";



export class AddApplicationOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=OutputDescriptions", elemType: OutputDescription })
  outputDescriptions?: OutputDescription[];
}
