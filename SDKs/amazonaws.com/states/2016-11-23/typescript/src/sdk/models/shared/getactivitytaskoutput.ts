import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActivityTaskOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=taskToken" })
  taskToken?: string;
}
