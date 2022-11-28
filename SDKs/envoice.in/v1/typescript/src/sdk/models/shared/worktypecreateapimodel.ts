import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WorkTypeCreateApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Title, form, name=Title;" })
  title?: string;
}
