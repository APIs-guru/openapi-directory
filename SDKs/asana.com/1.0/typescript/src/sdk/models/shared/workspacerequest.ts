import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WorkspaceRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
